import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";

import Layout from "@/components/Layout";

import StyledComponentsRegistry from "@/lib/registry";

import "./globals.css";

const merriweather = Merriweather({
  weight: ["400", "700"],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zabel Monuments | Manitowoc, Green Bay, Sheboygan, WI",
  description:
    "Bringing comfort and personalized memorials to generations of families in East Central Wisconsin since 1970.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${poppins.variable}`}>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
