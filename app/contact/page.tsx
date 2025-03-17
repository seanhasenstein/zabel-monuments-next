"use client";

import { Suspense } from "react";

import ContactContent from "@/components/ConatctContent";

export default function Contact() {
  return (
    <Suspense>
      <ContactContent />
    </Suspense>
  );
}
