import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Jewish Monuments Gallery | Zabel Monuments",
  description:
    "View our Jewish monuments gallery featuring traditional designs and symbols crafted with care to honor loved ones and family heritage.",
};

export default async function JewishGalleryPage() {
  const images = await getImages("jewish-monuments");

  return <Gallery galleryImages={images} galleryName="Jewish Monuments" />;
}
