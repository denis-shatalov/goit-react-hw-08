import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { useDispatch} from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';


export default function Contacts({value}) {
    const dispatch = useDispatch();

    const handleRemoveContact = (id) => {

        dispatch(deleteContact(id));
    };
    


    return (
        <div className={css.contactsBox}>
            
                <div key={value.id}>
                    <p><FaUser /> {value.name}</p>
                    <p><FaPhone /> {value.number}</p>
                    <button className={css.button} type="button" onClick={() => handleRemoveContact(value.id)}>Видалити</button>
                </div>
        
        </div>
    );
}