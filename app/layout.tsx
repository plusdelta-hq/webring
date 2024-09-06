import type { Metadata } from "next";
import "./globals.css";
import { inter, lora, libre } from "@/components/Font";

export const metadata: Metadata = {
  title: "Webring",
  description: "Webring of Webrings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={libre.className}
      >
        {children}
      </body>
    </html>
  );
}
