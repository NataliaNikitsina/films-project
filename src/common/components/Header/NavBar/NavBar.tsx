import {NavLink} from "react-router";
import {PATH} from "@/common/constants/constants.ts";
import s from './NavBar.module.css'

const links = [
    {path: PATH.MAIN_PAGE, label: 'Main'},
    {path: PATH.CATEGORY_MOVIES_PAGE, label: 'Category movies'},
    {path: PATH.FILTERED_MOVIES_PAGE, label: 'Filtered movies'},
    {path: PATH.SEARCH_PAGE, label: 'Search'},
    {path: PATH.FAVORITES_MOVIES_PAGE, label: 'Favorites'},
]

export function NavBar() {
    return (
        <nav>
            <ul className={s.list}>
                {links.map((link, index) => (
                    <li key={index} className={s.listItem}>
                        <NavLink to={link.path} className={s.link}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}