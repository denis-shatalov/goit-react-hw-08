import Contacts from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {

    const filteredContacts = useSelector(selectFilteredContacts)

    return (
        <ul className={css.list}>
            {filteredContacts.map((item) => (
                <li key={item.id}>
                    <Contacts value={item} />
                </li>
            ))}
        </ul>
    );
}
