import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export default async function IndividualGalleryPage() {
  const images = await getImages("individual-monuments");

  return <Gallery galleryImages={images} galleryName="Individual Monuments" />;
}
