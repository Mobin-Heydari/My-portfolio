import type { Metadata } from "next";





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
        {children}
      </body>
    </html>
  );
}
