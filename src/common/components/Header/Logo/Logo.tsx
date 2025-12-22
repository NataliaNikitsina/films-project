import logo from '../../../../assets/logo.svg'
import s from './Logo.module.css'
import {useNavigate} from "react-router";
import {PATH} from "@/common/constants/constants.ts";


export function Logo() {
    const navigate = useNavigate()
    const handleClick = () => navigate(PATH.MAIN_PAGE)
    return (
        <div onClick={handleClick}>
            <img className={s.logo} src={logo} alt="Logo" />
        </div>
    )
}