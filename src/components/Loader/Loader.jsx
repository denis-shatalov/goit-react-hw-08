import css from "../Loader/Loader.module.css"

export default function Loader() {
    return (
        <p className={css.loader}> Зачекайте, йде завантаження...</p>
    )
}