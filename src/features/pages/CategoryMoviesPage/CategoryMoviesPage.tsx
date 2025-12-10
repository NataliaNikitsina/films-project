import {NavBar} from "@/common/components/Header/NavBar/NavBar.tsx";
import {PATH, SECTION_LABELS} from "@/common/constants/constants.ts";
import {Outlet} from "react-router";


const links = [
    {path: PATH.POPULAR_MOVIES, label: SECTION_LABELS.POPULAR_MOVIES},
    {path: PATH.TOP_RATED_MOVIES, label: SECTION_LABELS.TOP_RATED_MOVIES},
    {path: PATH.UPCOMING_MOVIES, label: SECTION_LABELS.UPCOMING_MOVIES},
    {path: PATH.NOW_PLAYING_MOVIES, label: SECTION_LABELS.NOW_PLAYING_MOVIES},
]

export function CategoryMoviesPage() {
    return (
        <section>
            <NavBar links={links} />
            <div>
                <Outlet />
            </div>
        </section>
    )
}

