import s from './ThemeToggle.module.css'
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {changeThemeModeAC, selectThemeMode} from "@/app/app-slice.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";

export function ThemeToggle() {
    const themeMode = useAppSelector(selectThemeMode)
    const dispatch = useAppDispatch()

    const toggleTheme = () => dispatch(changeThemeModeAC({themeMode: themeMode==='dark' ? 'light' : 'dark'}))

    return (
        <input type="checkbox" className={s.checkbox} onClick={toggleTheme}/>
    )
}