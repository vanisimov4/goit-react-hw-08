import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './RegistrationForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Passowrd
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
