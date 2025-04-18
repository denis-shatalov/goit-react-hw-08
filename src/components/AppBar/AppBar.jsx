import AuthNav from "../AuthNav/AuthNav"
import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu"
import { selectLoggedIn } from "../../redux/auth/selectors"
import { useSelector } from "react-redux"
import css from "../AppBar/AppBar.module.css"


export default function AppBar() {

const isLoggedIn = useSelector(selectLoggedIn)

    return (
        <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu/> : <AuthNav/>} 
        </header>
        
    )
}