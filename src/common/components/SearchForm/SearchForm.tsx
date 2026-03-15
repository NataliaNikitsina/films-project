import s from './SearchForm.module.css';
import {useAppDispatch, useAppSelector} from '@/common/hooks';
import {selectSearchValue, setSearchValue} from '@/app/model';
import {type ChangeEvent, type FormEvent, useState} from 'react';
import {useNavigate} from 'react-router';
import {PATH} from '@/common/constants';

export const SearchForm = () => {
  const searchValue = useAppSelector(selectSearchValue);
  const [value, setValue] = useState<string>(searchValue);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchValue({searchValue: value.trim()}));
    navigate(PATH.SEARCH_PAGE);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.trim().length === 0) {
      dispatch(setSearchValue({searchValue: ''}));
    }
    setValue(e.currentTarget.value);
  };

  return (
    <form className={s.formSearch} onSubmit={handleSearch}>
      <input value={value} className={s.search} type={'search'} placeholder={'Search...'} onChange={handleChange} />
      <button className={s.btnSearch} disabled={value.trim().length === 0}>
        Search
      </button>
    </form>
  );
};
