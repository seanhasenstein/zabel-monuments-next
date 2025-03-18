import { Metadata } from "next";

import GraniteColorsContent from "@/components/content/GraniteColorsContent";

import { getGraniteColorImages } from "@/lib/s3";

export const metadata: Metadata = {
  title: "Granite Colors | Zabel Monuments",
};

export default async function GraniteColors() {
  const images = await getGraniteColorImages();

  return <GraniteColorsContent images={images} />;
}
