import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

export const fontRoboto = Roboto({
  weight: ["200", "500", "800"],
  style: ["italic", "normal"],

})

export const metadata: Metadata = {
  title: "Shadhin Wallet",
  description: "Shadhin Wallet is a Crypto Based Wallet | Developed by Mohtasim Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontRoboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
