import s from "@/features/pages/MainPage/Main.module.css";
import {type ChangeEvent, type FormEvent, useEffect, useState} from "react";
import {setSearchValueAC} from "@/app/app-slice.ts";
import {PATH} from "@/common/constants/constants.ts";
import {useNavigate} from "react-router";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";

export const SearchForm = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [debounced, setDebounced] = useState<string>('')
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(searchValue), 1000)
        return () => clearTimeout(handler)
    }, [searchValue])

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setSearchValueAC({searchValue: debounced}))
        navigate(PATH.SEARCH_PAGE)
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    return (
        <form className={s.formSearch} onSubmit={handleSearch}>
            <input value={searchValue} type={'search'} className={s.search} placeholder={'Search...'}
                   onChange={handleOnChange}/>
            <button className={s.btnSearch} disabled={debounced.trim().length === 0}>Search</button>
        </form>
    )
}