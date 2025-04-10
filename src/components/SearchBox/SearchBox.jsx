import css from "../SearchBox/SearchBox.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
    
     const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.name);

    function searchContacts(event) {
        dispatch(changeFilter(event.target.value));

    }

    return (
        <div className={css.searchBox}>
            <label htmlFor="search">Find contacts by name:</label>
            <input className={css.searchInput} name="search" type="text" value={filter} onChange={searchContacts}/>
        </div>
        
    )
    
}