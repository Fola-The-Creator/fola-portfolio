import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { GSAPProvider } from "@/components/animations";

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fola The Creator | Portfolio",
  description:
    "Crafting scalable web experiences with modern frontend technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gilroy.variable} antialiased scroll-smooth`}>
      <body className="bg-grey-0 text-grey-900">
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
