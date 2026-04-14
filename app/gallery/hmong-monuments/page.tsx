import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Hmong Monuments Gallery | Zabel Monuments",
  description:
    "See our gallery of Hmong monuments crafted with traditional designs and symbols to honor loved ones and celebrate cultural heritage.",
};

export default async function HmongGalleryPage() {
  const images = await getImages("hmong-monuments");

  return <Gallery galleryImages={images} galleryName="Hmong Monuments" />;
}
