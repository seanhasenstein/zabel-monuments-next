import { Metadata } from "next";

import PageShell from "@/components/PageShell";
import GuaranteeContent from "@/components/content/GuaranteeContent";

export const metadata: Metadata = {
  title: "100% Guarantee | Zabel Monuments",
};

export default function Guarantee() {
  return (
    <PageShell>
      <GuaranteeContent />
    </PageShell>
  );
}
