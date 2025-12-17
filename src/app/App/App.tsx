import {Header} from "../../common/components/Header/Header.tsx";
import {Footer} from "../../common/components/Footer/Footer.tsx";
import {Routing} from "@/common/components/Routing/Routing.tsx";
import s from './App.module.css'
import {selectFavoriteMovies, selectThemeMode} from "@/app/app-slice.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {ToastContainer} from "react-toastify";

export function App() {
    const themeMode = useAppSelector(selectThemeMode)
    const favoritesMovies = useAppSelector(selectFavoriteMovies);

    useEffect(() => {
        const saveData = () => {
            console.log('Data saved!');
            localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
            localStorage.setItem('themeMode', JSON.stringify(themeMode));
        };
        window.addEventListener('beforeunload', saveData);

        return () => {
            window.removeEventListener('beforeunload', saveData);
        };
    }, [favoritesMovies, themeMode]);


    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeMode);
    }, [themeMode]);


  return (
    <div className={s.app}>
        <Header />
        <div className={s.container}>
            <Routing/>
            <ToastContainer />
        </div>
        <Footer/>
    </div>
  )
}

