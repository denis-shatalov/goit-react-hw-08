import css from "../SearchBox/SearchBox.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';

export default function SearchBox() {
    
     const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.name);

    function searchContacts(event) {
        dispatch(changeFilter(event.target.value));

    }

    return (
        <div className={css.searchBox}>
            <label htmlFor="search">Пошук за іменем:</label>
            <input className={css.searchInput} name="search" type="text" value={filter} onChange={searchContacts}/>
        </div>
        
    )
    
}