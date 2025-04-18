import { Formik, Form, Field } from "formik"
import css from "../LoginForm/LoginForm.module.css"
import { useDispatch } from "react-redux"
import { login } from "../../redux/auth/operations"
import { useNavigate } from "react-router-dom"


export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values, actions) => {
        dispatch(login(values))
            .unwrap()
            .then(() => { 
               navigate("/contacts") 
            });
        actions.resetForm()
    }

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
        onSubmit={handleSubmit}>
            <Form className={css.loginForm}>
                <label > Пошта
                    <Field className={css.input} type="email" name="email"/>
                </label>
                <label > Пароль
                    <Field className={css.input} type="password" name="password"/>
                </label>
                <button className={css.btnReg} type="submit">Увійти</button>
            </Form>
        </Formik>
    )
}