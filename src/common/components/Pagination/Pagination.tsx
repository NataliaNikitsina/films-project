import {PaginationControls} from "@/common/components/Pagination/PaginationControls.tsx";
import s from "@/common/components/Pagination/Pagination.module.css";

type Props = {
    currentPage: number
    setCurrentPage: (page: number) => void
    pagesCount: number
}

export const Pagination = ({currentPage, setCurrentPage, pagesCount}: Props) => {
    if (pagesCount <= 1) return null

    return (
        <div className={s.container}>
            <PaginationControls pagesCount={pagesCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}