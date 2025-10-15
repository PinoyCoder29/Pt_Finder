import MainHeader from "@/components/layout/main/MainHeader";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function MainLayout({children}: {children: ReactNode}) {
    return(
        <div>
            <MainHeader/>
            <main>{children}</main>
             <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
        </div>
    )
}