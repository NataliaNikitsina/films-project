import s from './Header.module.css';
import {PATH, SECTION_LABELS} from '@/common/constants';
import {useGlobalLoading} from '@/common/hooks';
import {LinearProgress, Logo, NavBar, ThemeToggle} from '@/common/components';

const headerLinks = [
  {path: PATH.MAIN_PAGE, label: SECTION_LABELS.MAIN_PAGE},
  {path: PATH.CATEGORY_MOVIES_PAGE, label: SECTION_LABELS.CATEGORY_MOVIES_PAGE},
  {path: PATH.FILTERED_MOVIES_PAGE, label: SECTION_LABELS.FILTERED_MOVIES_PAGE},
  {path: PATH.SEARCH_PAGE, label: SECTION_LABELS.SEARCH_PAGE},
  {path: PATH.FAVORITES_MOVIES_PAGE, label: SECTION_LABELS.FAVORITES_MOVIES_PAGE},
];

export function Header() {
  const isGlobalLoading = useGlobalLoading();

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
        <NavBar links={headerLinks} />
        <ThemeToggle />
      </div>
      {isGlobalLoading && <LinearProgress />}
    </header>
  );
}
