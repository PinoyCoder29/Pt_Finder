import EmployerHeader from "@/components/layout/header/EmployerHeader";
import { ReactNode } from "react";

export default function Layout({children}: {children:ReactNode}){
    return(
        <div>
            <EmployerHeader/>
            <main>{children}</main> 
        </div>
    )
}