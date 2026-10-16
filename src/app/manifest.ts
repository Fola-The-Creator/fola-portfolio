import type { MetadataRoute } from "next";

/** Home screen and install icons for Android, Chrome and Edge. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fola Adebanjo | Full-Stack Designer & Developer",
    short_name: "Fola",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f0f0f",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
