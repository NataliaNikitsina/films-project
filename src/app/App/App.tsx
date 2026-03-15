import s from './App.module.css';
import {useAppSelector} from '@/common/hooks';
import {selectFavoriteMovies, selectThemeMode} from '@/app/model';
import {useEffect} from 'react';
import {Footer, Header, Routing} from '@/common/components';
import {ToastContainer} from 'react-toastify';

export function App() {
  const themeMode = useAppSelector(selectThemeMode);
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
        <Routing />
        <ToastContainer theme={themeMode} />
      </div>
      <Footer />
    </div>
  );
}
