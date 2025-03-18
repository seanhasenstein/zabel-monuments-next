import { Metadata } from "next";

import PageShell from "@/components/PageShell";
import ServicesContent from "@/components/content/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | Zabel Monuments",
  description:
    "Our main focus is to provide the best quality and workmanship for each and every one of our customers. We offer a range of services.",
};

export default function Services() {
  return (
    <PageShell>
      <ServicesContent />
    </PageShell>
  );
}
