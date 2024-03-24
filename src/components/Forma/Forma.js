import { Formik } from 'formik';
import {
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  FormText,
  FieldComment,
} from './Forma.styled';
import * as Yup from 'yup';
import { FormTitle } from './Forma.styled';
import { CustomButton } from 'components/Button/Button';
import Notiflix from 'notiflix';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required'),
  date: Yup.string().required('Date is required'),
  comment: Yup.string(),
});

export const Forma = () => {
  const handleSubmit = action => {
    Notiflix.Notify.success(`Your order is accepted.`);
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        date: '',
        comment: '',
      }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
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
            name="email"
            type="text"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <ErrorMessage name="email" component="span" />
        </FormGroup>
        <FormGroup>
          <Field
            name="date"
            type="string"
            placeholder="Booking date"
            pattern="(0[1-9]|1[1,2])(\/|-)(0[1-9]|[12][0-9]|3[01])(\/|-)(19|20)\d{2}"
          />
          <ErrorMessage name="date" component="span" />
        </FormGroup>
        <FormGroup>
          <FieldComment name="comment" type="text" placeholder="Comment" />
        </FormGroup>
        <CustomButton
          type="submit"
          style={{
            marginTop: '24px',
            marginLeft: '24px',
          }}
        >
          Send
        </CustomButton>
      </Form>
    </Formik>
  );
};
