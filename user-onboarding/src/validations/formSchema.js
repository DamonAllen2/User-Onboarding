import * as yup from 'yup';

const formSchema = yup.object().shape({
    fullname: yup
    .string()
    .required('name is required')
    .min(5, 'Be sure to include your First and Last name!'),
    email: yup
    .string()
    .trim()
    .required('Email is required!')
    .email('Must be a proper Email!'),
    password: yup
    .string()
    .trim()
    .required('Password is required!')
    .min(8, 'Password must be a minimum of 8 characters'),
    tos: yup
    .boolean()
    .oneOf([true], 'Must accept the Terms and Conditions!')
})

export default formSchema