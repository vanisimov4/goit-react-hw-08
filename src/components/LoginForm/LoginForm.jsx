import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="css.form" autoComplete="off">
        <label className="css.lsbel">
          Email
          <Field type="email" name="email" />
        </label>
        <label className="css.label">
          Passowrd
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
