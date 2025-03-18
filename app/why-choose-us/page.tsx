import { Metadata } from "next";

import PageShell from "@/components/PageShell";
import WhyChooseUsContent from "@/components/content/WhyChooseUsContent";

export const metadata: Metadata = {
  title: "Why Choose Us? | Zabel Monuments",
  description:
    "At Zabel Monuments, a memorial or headstone isn't just chosen out of a catalog. It's designed to tell a story and reflect the spirit of those being memorialized.",
};

export default function WhyChooseUs() {
  return (
    <PageShell>
      <WhyChooseUsContent />
    </PageShell>
  );
}
