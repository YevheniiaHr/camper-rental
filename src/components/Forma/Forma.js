import { Formik } from 'formik';
import { Form, Field, FormGroup, ErrorMessage, FormText } from './Forma.styled';
import * as Yup from 'yup';
import { FormTitle } from './Forma.styled';
import { CustomButton } from 'components/Button/Button';

// export const Forma = () => {
//   return <FormTitle>Book your campervan now</FormTitle>;
// };
const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required'),
});

export const Forma = () => {
  //   const contacts = useSelector(selectContacts);
  //   const dispatch = useDispatch();

  //   const handleSubmit = (values, { resetForm }) => {
  //     const { name, number } = values;

  // if (
  //   contacts.find(
  //     contact =>
  //       contact.name.toLowerCase().trim() === name.toLowerCase().trim()
  //   )
  // ) {
  //   resetForm();
  //   Notiflix.Notify.failure(`${name} is already in contacts!`);
  //   return;
  // }

  //     dispatch(addContact({ name, number }));
  //     Notiflix.Notify.success(
  //       `Contact with name ${name} has been added successfully to contacts list.`
  //     );
  //     resetForm();
  //   };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
      //   onSubmit={handleSubmit}
    >
      <Form>
        <FormTitle>Book your campervan now</FormTitle>
        <FormText>Stay connected! We are always ready to help you.</FormText>
        <FormGroup>
          <Field
            name="name"
            type="text"
            placeholder=" Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <ErrorMessage name="name" component="span" />
        </FormGroup>

        <FormGroup>
          <Field
            name="e-mail"
            type="text"
            placeholder="Email"
            // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />
          <ErrorMessage name="e-mail" component="span" />
        </FormGroup>
        <FormGroup>
          <Field
            name="number"
            type="number"
            placeholder="Booking date"
            // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />
          <ErrorMessage name="number" component="span" />
        </FormGroup>
        <FormGroup>
          <Field
            name="text"
            type="text"
            placeholder="Comment"
            // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />
        </FormGroup>
        <CustomButton
          style={{
            marginTop: '24px',
            marginLeft: '24px',
          }}
        >
          Send
        </CustomButton>
        {/* <button type="submit">Add contact</button> */}
      </Form>
    </Formik>
  );
};
