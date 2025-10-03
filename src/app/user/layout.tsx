import UserHeader from "@/components/layout/header/UserHeader";
import { ReactNode } from "react";

export default function UserLayout({children}: {children: ReactNode}) {
    return(
        <div>
            <UserHeader/>
             <main>{children}</main>
        </div>
    )
}