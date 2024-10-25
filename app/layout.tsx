import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const miSansLatin = localFont({
  src: [{
    path: "./fonts/MiSansLatin-Regular.ttf",
    weight: "500",
    style: "regular",
  }, {
    path: "./fonts/MiSansLatin-Bold.ttf",
    weight: "700",
    style: "bold",
  }],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${miSansLatin.className}`}
      >
        {children}
      </body>
    </html>
  );
}
