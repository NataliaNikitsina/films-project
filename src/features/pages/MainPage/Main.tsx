import {useGetAllCategoryMoviesQuery} from "@/features/pages/MainPage/model/useGetAllCategoryMoviesQuery.ts";
import {CategoryPreview} from "@/common/components/CategoryPreview/CategoryPreview.tsx";
import {PATH, SECTION_LABELS} from "@/common/constants/constants.ts";

const links = [
    {path: PATH.POPULAR_MOVIES, label: SECTION_LABELS.POPULAR_MOVIES},
    {path: PATH.TOP_RATED_MOVIES, label: SECTION_LABELS.TOP_RATED_MOVIES},
    {path: PATH.UPCOMING_MOVIES, label: SECTION_LABELS.UPCOMING_MOVIES},
    {path: PATH.NOW_PLAYING_MOVIES, label: SECTION_LABELS.NOW_PLAYING_MOVIES},
]

export function Main() {
    const allCategoryMoviesSliced = useGetAllCategoryMoviesQuery()

    //const randomCover =base_url + 'original' + data?.results[getRandomNumber(data.results.length)].poster_path

    return (
        <section>
            {/*//<img src={randomCover} alt={'cover'} width='100%' height={'500px'}/>*/}
            {links.map((el => (
                <CategoryPreview
                    title={el.label}
                    data={allCategoryMoviesSliced[el.label] ?? []}
                    linkPath={el.path}
                />
            )))}
        </section>
    )
}

