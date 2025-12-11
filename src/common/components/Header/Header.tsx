import {NavBar} from "@/common/components/Header/NavBar/NavBar.tsx";
import {Logo} from "@/common/components/Header/Logo/Logo.tsx";
import {ThemeToggle} from "@/common/components/Header/ThemeToggle/ThemeToggle.tsx";
import s from './Header.module.css'
import {PATH, SECTION_LABELS} from "@/common/constants/constants.ts";

const linksHeader = [
    {path: PATH.MAIN_PAGE, label: SECTION_LABELS.MAIN_PAGE},
    {path: PATH.CATEGORY_MOVIES_PAGE, label: SECTION_LABELS.CATEGORY_MOVIES_PAGE},
    {path: PATH.FILTERED_MOVIES_PAGE, label: SECTION_LABELS.FILTERED_MOVIES_PAGE},
    {path: PATH.SEARCH_PAGE, label: SECTION_LABELS.SEARCH_PAGE},
    {path: PATH.FAVORITES_MOVIES_PAGE, label: SECTION_LABELS.FAVORITES_MOVIES_PAGE},
]

export function Header() {

    return (
        <header className={s.header}>
            <Logo/>
            <NavBar links={linksHeader} />
            <ThemeToggle/>
        </header>
    )
}

