import {Header} from "../../common/components/Header/Header.tsx";
import {Footer} from "../../common/components/Footer/Footer.tsx";
import {Routing} from "@/common/components/Routing/Routing.tsx";
import s from './App.module.css'
import {selectFavoriteMovies, selectThemeMode} from "@/app/app-slice.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {useEffect} from "react";

export function App() {
    const themeMode = useAppSelector(selectThemeMode)
    const className = `${s.container} ${themeMode === 'dark' ? s.dark : ''}`
    const favoritesMovies = useAppSelector(selectFavoriteMovies);

    useEffect(() => {
        const saveData = () => {
            console.log('Data saved!');
            localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
        };
        window.addEventListener('beforeunload', saveData);

        return () => {
            window.removeEventListener('beforeunload', saveData);
        };
    }, [favoritesMovies]);


  return (
    <div className={className}>
        <Header />
        <Routing/>
        <Footer/>
    </div>
  )
}

