import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { FaPhone } from "react-icons/fa";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader"
import Error from "../../components/Error/Error"



export default function ContactsPage() {

  const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
        <div>
        <h1>Phonebook <FaPhone/></h1>
                    <ContactForm/>
                    <SearchBox />
                    {isLoading && <Loader />}
                    {isError && <Error/>}
                    <ContactList />
        </div>
        
    )
}