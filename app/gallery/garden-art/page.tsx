import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Garden Art Gallery | Zabel Monuments",
  description:
    "Explore our granite garden art gallery featuring benches, statues, and decorative pieces crafted to bring lasting beauty to outdoor spaces.",
};

export default async function GardenArtGalleryPage() {
  const images = await getImages("garden-art");

  return <Gallery galleryImages={images} galleryName="Garden Art" />;
}
