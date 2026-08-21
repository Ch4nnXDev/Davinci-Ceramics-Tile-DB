import type { Metadata } from "next";
import ServiceWorkerRegistration from "./components/serviceWorkerRegistration";
import "./globals.css";
import FloaterNav from "./components/floater-nav";

export const metadata: Metadata = {
  title: "Davinci Ceramics Catalogue",
  description: "Davinci IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <main>
          <ServiceWorkerRegistration />
          {children}

        </main>
        <FloaterNav />
        
        </body>
    </html>
  );
}
