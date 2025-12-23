import {Outlet} from "react-router";
import {PATH, SECTION_LABELS} from "@/common/constants";
import {NavBar} from "@/common/components";


const linksPage = [
    {path: PATH.POPULAR_MOVIES, label: SECTION_LABELS.POPULAR_MOVIES},
    {path: PATH.TOP_RATED_MOVIES, label: SECTION_LABELS.TOP_RATED_MOVIES},
    {path: PATH.UPCOMING_MOVIES, label: SECTION_LABELS.UPCOMING_MOVIES},
    {path: PATH.NOW_PLAYING_MOVIES, label: SECTION_LABELS.NOW_PLAYING_MOVIES},
]

export function CategoryMoviesPage() {
    return (
        <section>
            <NavBar links={linksPage}/>
            <Outlet/>
        </section>
    )
}

