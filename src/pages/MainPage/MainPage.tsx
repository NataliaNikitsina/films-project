import {useGetAllCategoryMoviesQuery} from "@/pages/MainPage/model/useGetAllCategoryMoviesQuery.ts";
import {CategoryPreview} from "@/common/components/CategoryPreview/CategoryPreview.tsx";
import {PATH, POSTER_SIZES, SECTION_LABELS} from "@/common/constants/constants.ts";
import {getRandomNumber} from "@/common/utils/getRandomNumber.ts";
import s from './Main.module.css'
import {useMemo} from "react";
import {SearchForm} from "@/common/components/SearchForm/SearchForm.tsx";
import {SkeletonMainPage} from "@/common/components/SkeletonMainPage/SkeletonMainPage.tsx";
import {useGetConfigurationQuery} from "@/pages/api/moviesApi.ts";
import noCover from "@/assets/noCover.svg";

const links = [
    {path: PATH.POPULAR_MOVIES, label: SECTION_LABELS.POPULAR_MOVIES},
    {path: PATH.TOP_RATED_MOVIES, label: SECTION_LABELS.TOP_RATED_MOVIES},
    {path: PATH.UPCOMING_MOVIES, label: SECTION_LABELS.UPCOMING_MOVIES},
    {path: PATH.NOW_PLAYING_MOVIES, label: SECTION_LABELS.NOW_PLAYING_MOVIES},
]

export function MainPage() {
    const allCategoryMoviesSliced = useGetAllCategoryMoviesQuery()
    const popularMovies = allCategoryMoviesSliced.popularMoviesAll
    const randomIndex = useMemo(()=>getRandomNumber(popularMovies.length), [popularMovies])

    const {data} = useGetConfigurationQuery()
    const baseImageUrl = data?.images.secure_base_url
    const imageSize = data?.images.poster_sizes.includes(POSTER_SIZES.ORIGINAL) ? POSTER_SIZES.ORIGINAL : ''
    let randomCover;
    if(popularMovies.length > 0 && imageSize) {
        randomCover =baseImageUrl + imageSize + popularMovies[randomIndex].backdrop_path
    }else randomCover = noCover

    if(allCategoryMoviesSliced.isLoading) return <SkeletonMainPage/>

    return (
        <section>
            <div className={s.backdrop} style={{backgroundImage: `linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(18, 18, 18) 79.17%), url(${randomCover})`}}>
                <div className={s.content}>
                    <h1 className={s.title}>Welcome to TMDB</h1>
                    <h2 className={s.subtitle}>Browse highlighted titles from TMDB</h2>
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

