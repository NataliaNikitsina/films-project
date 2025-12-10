import {NavLink} from "react-router";
import s from './NavBar.module.css'

type Props = {
    links: {path: string, label: string}[]
}

export function NavBar({links}: Props) {
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