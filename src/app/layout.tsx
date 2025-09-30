import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seudominio.com"), // ← Adicione esta linha
  title: "Gabriel Carvalho - Desenvolvedor Full Stack",
  description:
    "Portfolio de Gabriel Carvalho, desenvolvedor full stack especializado em React, Next.js e Node.js",
  keywords: ["desenvolvedor", "full stack", "react", "nextjs", "portfolio"],
  authors: [{ name: "Gabriel Carvalho" }],
  openGraph: {
    title: "Gabriel Carvalho - Desenvolvedor Full Stack",
    description: "Portfolio de Gabriel Carvalho",
    type: "website",
    url: "https://seudominio.com",
    images: [
      {
        url: "/og-image.jpg", // Imagem para compartilhamento
        width: 1200,
        height: 630,
        alt: "Gabriel Carvalho - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Carvalho - Desenvolvedor Full Stack",
    description: "Portfolio de Gabriel Carvalho",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
