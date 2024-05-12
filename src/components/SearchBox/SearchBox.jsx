import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleSearch = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBoxWrapper}>
      <p className={css.searchParagraph}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={nameFilter}
        onChange={handleSearch}
      />
    </div>
  );
}
