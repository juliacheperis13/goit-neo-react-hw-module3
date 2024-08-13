import { Formik, Form, Field, ErrorMessage, getIn } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

const initialValues = {
  name: "",
  phone: "",
};

const getStyles = (errors, touched, fieldName) => {
  return getIn(errors, fieldName) && getIn(touched, fieldName) ? "invalid" : "";
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ submitHandler }) => {
  return (
    <Formik
      validateOnMount={true}
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      {({ errors, touched, isValid }) => (
        <Form className="form container">
          <div className="inputContainer">
            <label>Name</label>
            <Field
              className={clsx(
                "input",
                getStyles(errors, touched, "name", isValid)
              )}
              type="text"
              name="name"
              placeholder="Contact name"
            />
            <ErrorMessage className="error" name="name" component="span" />
          </div>

          <div className="inputContainer">
            <label>Number</label>
            <Field
              className={clsx("input", getStyles(errors, touched, "phone"))}
              type="text"
              name="phone"
              placeholder="000-00-00"
            />
            <ErrorMessage className="error" name="phone" component="span" />
          </div>

          <button
            className={clsx("button", "primary", "selfCenter")}
            type="submit"
            disabled={!isValid}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
