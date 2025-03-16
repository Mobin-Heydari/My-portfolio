import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mobin Heydari",
  description: "MKobin Heydari portfolio",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
