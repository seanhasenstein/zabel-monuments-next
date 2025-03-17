import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export default async function SlantsGalleryPage() {
  const images = await getImages("slant-monuments");

  return <Gallery galleryImages={images} galleryName="Slant Monuments" />;
}
