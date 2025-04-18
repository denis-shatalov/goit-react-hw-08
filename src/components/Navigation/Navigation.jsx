import { useSelector } from "react-redux"
import { selectLoggedIn } from "../../redux/auth/selectors" 
import { NavLink } from "react-router-dom"
import css from "../Navigation/Navigation.module.css"



export default function Navagation() {

    const isLoggedIn = useSelector(selectLoggedIn)

    return (
        <nav className={css.navBox}>
            <NavLink className={css.link} to="/">Головна </NavLink>
            {isLoggedIn && (<NavLink className={css.link} to="/contacts"> Мої контакти </NavLink>)}
            
        </nav>
    )
}