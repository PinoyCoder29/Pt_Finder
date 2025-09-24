import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from "@/components/layout/main/MainHeader";
import { ReactNode } from "react";
import Script from "next/script";

export default function MainLayout({ children }: { children: ReactNode }) {
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
