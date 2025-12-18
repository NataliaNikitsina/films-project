import s from './SearchForm.module.css'
import {type ChangeEvent, type FormEvent, useState} from "react";
import {setSearchValueAC} from "@/app/app-slice.ts";
import {PATH} from "@/common/constants/constants.ts";
import {useNavigate} from "react-router";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";

export const SearchForm = () => {
    const [searchValue, setSearchValue] = useState<string>('')

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setSearchValueAC({searchValue: searchValue.trim()}))
        navigate(PATH.SEARCH_PAGE)
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    return (
        <form className={s.formSearch} onSubmit={handleSearch}>
            <input value={searchValue} className={s.search} type={'search'} placeholder={'Search...'}
                   onChange={handleOnChange}/>
            <button className={s.btnSearch} disabled={searchValue.trim().length === 0}>Search</button>
        </form>
    )
}