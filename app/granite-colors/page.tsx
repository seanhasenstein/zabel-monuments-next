import GraniteColors from "@/components/GraniteColors";

import { getGraniteColorImages } from "@/lib/s3";

export default async function GraniteColorsPage() {
  const images = await getGraniteColorImages();

  return <GraniteColors images={images} />;
}
