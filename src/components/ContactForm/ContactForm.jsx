import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactSlice";

const INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const dispatch = useDispatch();

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    actions.resetForm();
    dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form>
        <div>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
