import s from './MainPage.module.css'
import { PATH, SECTION_LABELS } from "@/common/constants";
import { useAllCategoryMoviesQuery } from "@/pages/MainPage/hooks";
import { CategoryPreview, SearchForm, SkeletonMainPage } from "@/common/components";
import { useMainBackgroundImage } from "@/pages/MainPage/hooks/useMainBackgroundImage.ts";


const links = [
  {path: PATH.POPULAR_MOVIES, label: SECTION_LABELS.POPULAR_MOVIES},
  {path: PATH.TOP_RATED_MOVIES, label: SECTION_LABELS.TOP_RATED_MOVIES},
  {path: PATH.UPCOMING_MOVIES, label: SECTION_LABELS.UPCOMING_MOVIES},
  {path: PATH.NOW_PLAYING_MOVIES, label: SECTION_LABELS.NOW_PLAYING_MOVIES},
]

export function MainPage() {
  const allCategoryMoviesSliced = useAllCategoryMoviesQuery()
  const backgroundImageStyle = useMainBackgroundImage()

  if (allCategoryMoviesSliced.isLoading) return <SkeletonMainPage/>

  return (
          <section>
            <div className={s.main} style={backgroundImageStyle}>
              <div className={s.content}>
                <h1>Welcome</h1>
                <h3>Browse highlighted titles from TMDB</h3>
                <SearchForm/>
              </div>
            </div>
            {links.map(((el, index) => (
                    <CategoryPreview
                            key={index}
                            title={el.label}
                            data={allCategoryMoviesSliced[el.label] ?? []}
                            linkPath={el.path}
                    />
            )))}
          </section>
  )
}

