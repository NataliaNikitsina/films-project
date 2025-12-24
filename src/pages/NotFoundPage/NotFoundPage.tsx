import {NavLink} from "react-router";
import s from './NotFoundPage.module.css'
import {PATH} from "@/common/constants";

export const NotFoundPage = () => {
    return (
        <section className={s.page}>
            <p>Page not found</p>
            <NavLink className={s.link} to={PATH.MAIN_PAGE}>Return to main page</NavLink>
        </section>
    )
}