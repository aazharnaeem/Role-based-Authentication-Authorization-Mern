import * as yup from 'yup'


const registerSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/(?=.*[0-9])/, "Password must contain a number")
        .matches(/(?=.*[A-Z])/, "Password must contain an uppercase letter")
        .required("Password is required"),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required("Confirm Password is required"),
});

const loginSchema = yup.object({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().required("Password is required"),
})


export { registerSchema , loginSchema};