import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export default async function JewishGalleryPage() {
  const images = await getImages("jewish-monuments");

  return <Gallery galleryImages={images} galleryName="Jewish Monuments" />;
}
