import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Companion Monuments Gallery | Zabel Monuments",
};

export default async function CompanionsGalleryPage() {
  const images = await getImages("companion-monuments");

  return <Gallery galleryImages={images} galleryName="Companion Monuments" />;
}
