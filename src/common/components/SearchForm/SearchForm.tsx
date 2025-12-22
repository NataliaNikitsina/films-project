import s from './SearchForm.module.css'
import {type ChangeEvent, type FormEvent, useState} from "react";
import {selectSearchValue, setSearchValueAC} from "@/app/app-slice.ts";
import {PATH} from "@/common/constants/constants.ts";
import {useNavigate} from "react-router";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";

export const SearchForm = () => {
    const searchValue = useAppSelector(selectSearchValue)
    const [value, setValue] = useState<string>(searchValue)

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setSearchValueAC({searchValue: value.trim()}))
        navigate(PATH.SEARCH_PAGE)
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <form className={s.formSearch} onSubmit={handleSearch}>
            <input value={value} className={s.search} type={'search'} placeholder={'Search...'}
                   onChange={handleOnChange}/>
            <button className={s.btnSearch} disabled={value.trim().length === 0}>Search</button>
        </form>
    )
}