import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Shell Client",
  description: "Web Based Centralized Server Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
