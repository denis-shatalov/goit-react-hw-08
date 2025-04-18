import { NavLink } from "react-router-dom"
import css from "../AuthNav/AuthNav.module.css"

export default function AuthNav() {
    return (
        <div className={css.linkBox}>
            <NavLink className={css.link} to="/register">Регістрація</NavLink>
            <NavLink className={css.link} to="/login">Увійти</NavLink>
        </div>
    )
}