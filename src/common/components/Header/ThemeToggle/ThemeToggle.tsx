import s from './ThemeToggle.module.css';
import {useAppDispatch, useAppSelector} from '@/common/hooks';
import {changeThemeMode, selectThemeMode} from '@/app/model';

export function ThemeToggle() {
  const themeMode = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();

  const toggleTheme = () => dispatch(changeThemeMode({themeMode: themeMode === 'dark' ? 'light' : 'dark'}));

  return <input type="checkbox" className={s.checkbox} onChange={toggleTheme} checked={themeMode === 'dark'} />;
}
