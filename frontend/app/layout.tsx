import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Ui/Header";




export const metadata: Metadata = {
  title: "Mobin Heydari",
  description: "Mobin Heydari portfolio",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
