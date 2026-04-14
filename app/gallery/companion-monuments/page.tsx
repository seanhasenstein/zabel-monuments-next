import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Companion Monuments Gallery | Zabel Monuments",
  description:
    "Browse our gallery of companion monuments designed to honor couples and loved ones together with personalized granite memorials.",
};

export default async function CompanionsGalleryPage() {
  const images = await getImages("companion-monuments");

  return <Gallery galleryImages={images} galleryName="Companion Monuments" />;
}
