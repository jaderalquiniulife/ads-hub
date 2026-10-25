import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADS Hub",
  description:
    "Projeto didático em Next.js, React e TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
