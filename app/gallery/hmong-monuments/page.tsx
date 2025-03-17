import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export default async function HmongGalleryPage() {
  const images = await getImages("hmong-monuments");

  return <Gallery galleryImages={images} galleryName="Hmong Monuments" />;
}
