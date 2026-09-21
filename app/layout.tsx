import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "AI Asset Hub", description: "AI video team asset library" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
