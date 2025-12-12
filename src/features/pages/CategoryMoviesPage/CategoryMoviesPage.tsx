import {NavBar} from "@/common/components/Header/NavBar/NavBar.tsx";
import {PATH, SECTION_LABELS} from "@/common/constants/constants.ts";
import {Outlet, useNavigate} from "react-router";
import {useEffect} from "react";


const linksPage = [
    {path: PATH.POPULAR_MOVIES, label: SECTION_LABELS.POPULAR_MOVIES},
    {path: PATH.TOP_RATED_MOVIES, label: SECTION_LABELS.TOP_RATED_MOVIES},
    {path: PATH.UPCOMING_MOVIES, label: SECTION_LABELS.UPCOMING_MOVIES},
    {path: PATH.NOW_PLAYING_MOVIES, label: SECTION_LABELS.NOW_PLAYING_MOVIES},
]

export function CategoryMoviesPage() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(PATH.POPULAR_MOVIES)
    }, [navigate]);
    return (
        <section>
            <NavBar links={linksPage}/>
            <Outlet/>
        </section>
    )
}

