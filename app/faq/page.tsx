import { Metadata } from "next";

import PageShell from "@/components/PageShell";
import FaqContent from "@/components/content/FaqContent";

export const metadata: Metadata = {
  title: "FAQ | Zabel Monuments",
  description:
    "Do you have a question? See our FAQ's page or send us a message. We are here to help you with anything that you may need.",
};

export default function Faq() {
  return (
    <PageShell>
      <FaqContent />
    </PageShell>
  );
}
