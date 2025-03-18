import { Metadata } from "next";

import PageShell from "@/components/PageShell";
import StaffContent from "@/components/content/StaffContent";

export const metadata: Metadata = {
  title: "Meet Our Staff | Zabel Monuments",
  description:
    "Meet our caring staff that is here to help you with anything that you may need.",
};

export default function Staff() {
  return (
    <PageShell>
      <StaffContent />
    </PageShell>
  );
}
