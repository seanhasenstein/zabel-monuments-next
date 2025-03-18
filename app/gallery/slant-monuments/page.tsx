import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Slant Monuments Gallery | Zabel Monuments",
};

export default async function SlantsGalleryPage() {
  const images = await getImages("slant-monuments");

  return <Gallery galleryImages={images} galleryName="Slant Monuments" />;
}
