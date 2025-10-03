import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactNode } from "react";
import Script from "next/script";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
          strategy="beforeInteractive" 
        />
      </body>
    </html>
  );
}
