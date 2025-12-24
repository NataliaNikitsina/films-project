import s from './ThemeToggle.module.css'
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {changeThemeModeAC, selectThemeMode} from "@/app";


export function ThemeToggle() {
    const themeMode = useAppSelector(selectThemeMode)
    const dispatch = useAppDispatch()

    const toggleTheme = () => dispatch(changeThemeModeAC({themeMode: themeMode==='dark' ? 'light' : 'dark'}))

    return (
        <input type="checkbox" className={s.checkbox} onChange={toggleTheme} checked={themeMode === 'dark'}/>
    )
}