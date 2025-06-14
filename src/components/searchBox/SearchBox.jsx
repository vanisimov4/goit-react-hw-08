import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter);

  // const handleChangeSearch = event => {
  //   dispatch(changeFilter(event.target.value));
  // };

  const debounced = useDebouncedCallback(
    // function
    value => {
      dispatch(changeFilter(value));
    },
    // delay in ms
    300
  );

  return (
    <div className={css.searchBox}>
      <label htmlFor={id}>Find contacts by Name or Number</label>
      <input
        type="text"
        id={id}
        // value={searchValue}
        // onChange={handleChangeSearch}
        defaultValue={searchValue}
        onChange={e => debounced(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
