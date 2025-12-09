import {Header} from "../../common/components/Header/Header.tsx";
import {Footer} from "../../common/components/Footer/Footer.tsx";
import {Routing} from "@/common/components/Routing/Routing.tsx";
import s from './App.module.css'
import {selectThemeMode} from "@/app/app-slice.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";

export function App() {
    const themeMode = useAppSelector(selectThemeMode)
  return (
    <div className={themeMode === 'dark' ? s.dark : ''}>
        <Header />
        <Routing/>
        <Footer/>
    </div>
  )
}

