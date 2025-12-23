import {NavLink} from "react-router";
import s from './NavBar.module.css'

type Props = {
    links: { path: string, label: string }[]
}

export function NavBar({links}: Props) {
    return (
        <nav>
            <ul className={s.list}>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path}
                                 className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link}>
                            {link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}