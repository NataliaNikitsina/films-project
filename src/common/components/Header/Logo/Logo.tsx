import logo from '../../../../assets/logo.svg'
import s from './Logo.module.css'
import {useNavigate} from "react-router";


export function Logo() {
    const navigate = useNavigate()
    const handleClick = () => navigate('/')
    return (
        <div onClick={handleClick}>
            <img className={s.logo} src={logo} alt="Logo" />
        </div>
    )
}