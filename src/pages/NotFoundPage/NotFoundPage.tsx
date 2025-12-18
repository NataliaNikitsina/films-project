import {useNavigate} from "react-router";
import {PATH} from "@/common/constants/constants.ts";
import s from './NotFoundPage.module.css'

export const NotFoundPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(PATH.MAIN_PAGE)
    }

    return (
        <section className={s.page}>
            <p className={s.text}>Oh...</p>
            <p className={s.text}>Page not found</p>
            <button className={s.btn} onClick={handleClick}>Return to main page</button>
        </section>
    )
}