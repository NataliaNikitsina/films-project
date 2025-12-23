import logo from '../../../../assets/images/logo.svg'
import s from './Logo.module.css'
import {PATH} from "@/common/constants/constants.ts";
import {NavLink} from "react-router";


export function Logo() {
    return (
        <NavLink to={PATH.MAIN_PAGE}>
            <img className={s.logo} src={logo} alt="Logo" />
        </NavLink>
    )
}