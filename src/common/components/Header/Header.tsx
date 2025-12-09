import {NavBar} from "@/common/components/Header/NavBar/NavBar.tsx";
import {Logo} from "@/common/components/Header/Logo/Logo.tsx";
import {ThemeToggle} from "@/common/components/Header/ThemeToggle/ThemeToggle.tsx";


export function Header() {

    return (
        <header>
            <Logo/>
            <NavBar/>
            <ThemeToggle/>
        </header>
    )
}

