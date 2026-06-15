import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { CustomCursor, GSAPProvider } from "@/components/animations";
import { Footer, Navigation } from "@/components/layouts";
import { DarkThemeProvider } from "@/context/DarkThemeContext";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const gilroy = localFont({
  src: [
    { path: "../fonts/Gilroy-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Gilroy-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Gilroy-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Gilroy-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Gilroy-Extrabold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fola Adebanjo | Full-Stack Designer & Developer",
  description:
    "Fola is a full-stack designer and developer based in Lagos, Nigeria. He designs and builds digital products across UI/UX, brand identity, web, and mobile, for clients around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gilroy.variable} antialiased scroll-smooth`}>
      <body className="bg-grey-0 text-grey-900">
        <DarkThemeProvider>
          <GSAPProvider>
            <CustomCursor />
            <Navigation />
            {children}
            <Footer />
          </GSAPProvider>
        </DarkThemeProvider>
      </body>
    </html>
  );
}
