import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="css.form" autoComplete="off">
        <label className="css.label">
          Username
          <Field type="text" name="name" />
        </label>
        <label className="css.lsbel">
          Email
          <Field type="email" name="email" />
        </label>
        <label className="css.label">
          Passowrd
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
