import type { Metadata } from "next";

import PageShell from "@/components/PageShell";
import AboutContent from "@/components/content/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Zabel Monuments",
  description:
    "Zabel Monuments respectfully serves the Sheboygan, Manitowoc, and Green Bay areas and the surrounding communities of East Central Wisconsin with a selection of beautifully crafted memorials.",
};

export default function About() {
  return (
    <PageShell>
      <AboutContent />
    </PageShell>
  );
}
