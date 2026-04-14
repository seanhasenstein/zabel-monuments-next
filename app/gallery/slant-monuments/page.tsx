import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Slant Monuments Gallery | Zabel Monuments",
  description:
    "Explore our slant monuments gallery showcasing angled granite memorials that offer a classic, low-profile tribute for loved ones.",
};

export default async function SlantsGalleryPage() {
  const images = await getImages("slant-monuments");

  return <Gallery galleryImages={images} galleryName="Slant Monuments" />;
}
