import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export default async function GardenArtGalleryPage() {
  const images = await getImages("garden-art");

  return <Gallery galleryImages={images} galleryName="Garden Art" />;
}
