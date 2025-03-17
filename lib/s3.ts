import {
  S3Client,
  ListObjectsV2Command,
  // PutObjectCommand,
  S3ClientConfig,
  _Object,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";

import { Galleries } from "@/types";

interface ImageMetadata {
  key: string | undefined;
  url: string;
  lastModified: Date | undefined;
  size: number | undefined;
}

// Initialize S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
} as S3ClientConfig);

// Function to get all images from S3 bucket
export async function getImages(folder: Galleries): Promise<ImageMetadata[]> {
  const command = new ListObjectsV2Command({
    Bucket: process.env.AWS_BUCKET_NAME,
    Prefix: `galleries/${folder}/`, // Optional folder structure i.e. flat-memorials/
  });

  try {
    const { Contents } = await s3Client.send(command);
    if (!Contents || Contents.length === 0) {
      return [];
    }

    // Map S3 objects to image URLs
    return Contents.filter(
      (item) =>
        item.Size && item.Size > 0 && item.Key && !item.Key.endsWith("/")
    )
      .sort((a, b) => {
        if (!a.LastModified || !b.LastModified) {
          return 0;
        }
        return b.LastModified.getTime() - a.LastModified.getTime();
      })
      .map((item: _Object) => ({
        key: item.Key,
        url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`,
        lastModified: item.LastModified,
        size: item.Size,
      }));
  } catch (error) {
    console.error("Error fetching images from S3:", error);
    return [];
  }
}

// Function to get all granite-color images from S3 bucket
export async function getGraniteColorImages(): Promise<ImageMetadata[]> {
  try {
    const command = new ListObjectsV2Command({
      Bucket: process.env.AWS_BUCKET_NAME,
      Prefix: "galleries/granite-colors/",
    });
    const data = await s3Client.send(command);

    if (!data.Contents) {
      return [];
    }

    const imagePromises = data.Contents.filter(
      (item) =>
        item.Size && item.Size > 0 && item.Key && !item.Key.endsWith("/")
    ).map(async (item) => {
      const headParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: item.Key,
      };
      const headCommand = new HeadObjectCommand(headParams);
      const headData = await s3Client.send(headCommand);
      const caption =
        (headData.Metadata && headData.Metadata["granite-color"]) ||
        "No caption available";

      // Generate a URL for the image
      const imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`;

      return {
        key: item.Key,
        url: imageUrl,
        lastModified: item.LastModified,
        size: item.Size,
        caption,
      };
    });

    const images = await Promise.all(imagePromises);
    return images.sort((a, b) => {
      if (!a.caption || !b.caption) {
        return 0;
      }
      return b.caption > a.caption ? -1 : 1;
    });
  } catch (error) {
    console.error("Error fetching granite-color images from S3:", error);
    return [];
  }
}

// interface UploadResponse {
//   success: boolean;
//   key?: string;
//   url?: string;
//   error?: string;
// }

// Function to upload an image to S3
// export async function uploadImage(
//   file: File,
//   fileName: string
// ): Promise<UploadResponse> {
//   const fileBuffer = Buffer.from(await file.arrayBuffer());

//   const command = new PutObjectCommand({
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Key: `images/${fileName}`,
//     Body: fileBuffer,
//     ContentType: file.type,
//     // Optional: Set public read access
//     ACL: 'public-read',
//   });

//   try {
//     await s3Client.send(command);
//     return {
//       success: true,
//       key: `images/${fileName}`,
//       url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/images/${fileName}`,
//     };
//   } catch (error) {
//     console.error('Error uploading image to S3:', error);
//     return {
//       success: false,
//       error:
//         error instanceof Error ? error.message : 'An unknown error occurred',
//     };
//   }
// }
