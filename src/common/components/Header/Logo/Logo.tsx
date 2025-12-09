import logo from '../../../../assets/logo.svg'
import s from './Logo.module.css'


export function Logo() {
    return (
        <img className={s.logo} src={logo} alt="Logo" />
    )
}