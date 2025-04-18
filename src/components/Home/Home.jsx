import css from "../Home/Home.module.css"

export default function HomePage() {
    return (
        <div className={css.home}>
            Вітаємо на сторінці{" "}
            <span className={css.cont}>контактів.</span>
        </div>
    );
}
