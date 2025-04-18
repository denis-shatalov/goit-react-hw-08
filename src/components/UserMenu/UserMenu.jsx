import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import css from "../UserMenu/UserMenu.module.css"
import {logout} from "../../redux/auth/operations"

export default function UserMenu() {
    const dispatch = useDispatch();

    const user = useSelector(selectUser)

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className={css.user }>
            <p>Вітаємо, {user.name}</p>
            <button onClick={handleLogout} className={css.btn} type="button">Вийти з профілю</button>
        </div>
    )
}