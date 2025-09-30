import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Portfolio - Desenvolvedor Full Stack",
  description:
    "Portfolio profissional de desenvolvedor full stack especializado em React, Next.js e tecnologias modernas.",
  keywords: "desenvolvedor, full stack, react, nextjs, typescript, portfolio",
  authors: [{ name: "Seu Nome" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
