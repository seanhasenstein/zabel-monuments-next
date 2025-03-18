import { Suspense } from "react";
import { Metadata } from "next";

import ContactContent from "@/components/content/ConatctContent";

export const metadata: Metadata = {
  title: "Contact Us | Zabel Monuments",
  description:
    "Please let us know if you have any questions or if you would like to schedule an appointment at one of our stores.",
};

export default function Contact() {
  return (
    <Suspense>
      <ContactContent />
    </Suspense>
  );
}
