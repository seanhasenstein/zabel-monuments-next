import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Hmong Monuments Gallery | Zabel Monuments",
};

export default async function HmongGalleryPage() {
  const images = await getImages("hmong-monuments");

  return <Gallery galleryImages={images} galleryName="Hmong Monuments" />;
}
