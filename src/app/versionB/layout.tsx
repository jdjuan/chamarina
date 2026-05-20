import type { Metadata } from "next";
import { Footer, Header } from "./components";

export const metadata: Metadata = {
  title: "Version B | Praxis Chamarina",
  description:
    "Alternative Website-Version der Praxis Chamarina mit kurzen Übersichtsseiten und Detailseiten.",
};

export default function VersionBLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-[#14363b]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
