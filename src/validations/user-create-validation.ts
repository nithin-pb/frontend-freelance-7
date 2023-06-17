import * as Yup from "yup";

export const userCreateValidation = Yup.object().shape({
    firstName: Yup
        .string()
        .min(3)
        .max(255)
        .required(),
    lastName: Yup
        .string()
        .min(1)
        .max(255)
        .required(),
    email: Yup
        .string()
        .min(4)
        .max(255),
    gender: Yup
        .string()
        .oneOf(['male', 'female'])
        .required(),
    password: Yup
        .string()
        .required(),
    role: Yup
        .string()
        .required(),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required()
})