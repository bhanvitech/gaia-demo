import { object, string } from 'yup';

export const RegisterationSchema = object().shape({
  name: string()
    .required('Name is required')
    .matches(/^[a-zA-Z ]*$/, 'Name should contain only alphabets and spaces'),
  email: string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      'Invalid email format'
    ),
  password: string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
      'Password must contain at least one uppercase letter, lowercase letter, number,special character, and be at least 8 characters long'
    ),
  mobile: string()
    .required('Mobile number is required')
    .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
    .min(10, 'Mobile number must be exactly 10 digits')
    .max(10, 'Mobile number must be exactly 10 digits'),
});
