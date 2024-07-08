import { Formik, Form, Field } from "formik";

export default function SearchBar({ handleSubmit, value }) {
  return (
    <Formik
      initialValues={{
        searchWord: value,
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <button type="submit">Search</button>
        <Field
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="searchWord"
        ></Field>
      </Form>
    </Formik>
  );
}