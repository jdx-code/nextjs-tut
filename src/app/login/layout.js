"use client"
import Link from "next/link";
import './login.css'
import { usePathname } from "next/navigation";

export default function Layout ({children}) {

    const pathName = usePathname()
    console.log(pathName)

    return (
        <div>
            {
             pathName !== "/login/loginTeacher" ? 
                <ul className="login-menu">                
                    <li>
                        <h4>Login page</h4>
                    </li>
                    <li>
                        <Link href="/login/loginStudent">Login student</Link>
                    </li>
                    <li>
                        <Link href="/login/loginTeacher">Login teacher</Link>
                    </li>
                    <li>
                        <Link href="/">Back to home</Link>
                    </li>
                </ul>
            : null    
            }            
            {children}
        </div>
    )
}