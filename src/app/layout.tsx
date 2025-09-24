import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactNode } from "react";
import Script from "next/script";
import MainHeader from "@/components/layout/main/MainHeader";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <main>{children}</main>

        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
          strategy="beforeInteractive" 
        />
      </body>
    </html>
  );
}
