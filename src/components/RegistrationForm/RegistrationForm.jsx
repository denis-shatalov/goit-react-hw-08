import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from "../../redux/auth/operations"
import css from "../RegistrationForm/RegistrationForm.module.css"

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values))
        actions.resetForm();
    }
   
    return (
        <Formik
         initialValues={{
                name: ``,
                email: ``,
                password: ``,
            }}
        onSubmit={handleSubmit}
        >
           
            

            <Form className={css.regForm}>
                <label >Ім'я
                    <Field className={css.input}  type="text" name="name" />
                </label>
                <label >Пошта
                    <Field className={css.input}  type="email" name="email" />
                </label>
                <label >Пароль
                    <Field className={css.input}  type="password" name="password" />
                </label>
                <button className={css.btnSub} type='submit'>Регістрація</button>
            </Form>
        </Formik>
    )
}