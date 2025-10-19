import EmployerHeader from "@/components/layout/header/EmployerHeader";
import { ReactNode } from "react";

export default function Layout({children}: {children:ReactNode}){
    return(
        <div>
            <div className="row">
                <div className="col-md-2">
                 <EmployerHeader/>
                </div>
                <div className="col-md-10">
                <main>{children}</main> 

                </div>
            </div>
        </div>
    )
}