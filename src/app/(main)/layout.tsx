import MainHeader from "@/components/layout/main/MainHeader";
import { ReactNode } from "react";

export default function MainLayout({children}: {children: ReactNode}) {
    return(
        <div>
            <MainHeader/>
            <main>{children}</main>
        </div>
    )
}