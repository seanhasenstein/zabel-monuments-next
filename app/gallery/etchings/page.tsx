import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Etchings Gallery | Zabel Monuments",
  description:
    "View examples of our custom laser and hand-crafted etchings on granite memorials, including portraits, landscapes, and personal tributes.",
};

export default async function EtchingsGalleryPage() {
  const images = await getImages("etchings");

  return <Gallery galleryImages={images} galleryName="Etchings" />;
}
