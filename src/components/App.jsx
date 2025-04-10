import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import Loader from "./Loader/Loader"
import Error from "./Error/Error"
import { selectLoading, selectError } from "../redux/contactsSlice"
import css from "./App.module.css"
import { FaPhone } from "react-icons/fa";

export default function App() {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectLoading)
    const isError = useSelector(selectError)
    
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <div className={css.container}>
            <h1>Phonebook <FaPhone/></h1>
            <ContactForm/>
            <SearchBox />
            {isLoading && <Loader />}
            {isError && <Error/>}
            <ContactList />
        </div>

    )
}
