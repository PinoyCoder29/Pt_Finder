import 'bootstrap/dist/css/bootstrap.min.css'
import MainHeader from "@/components/layout/main/MainHeader";
import { ReactNode } from "react";

export default function MainLayout({children}: {children: ReactNode}) {
  return(
   <html>
    <body>
      <MainHeader/>
      <main>{children}</main>
    </body>
   </html>
  )
}