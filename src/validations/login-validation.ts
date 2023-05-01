import * as Yup from "yup";

export const signinValidator = Yup.object().shape({
    username: Yup
        .string()
        .min(3)
        .max(155)
        .required(),
    password: Yup
        .string()
        .min(1)
        .required(),
    totp: Yup
        .string()
        .min(6)
        .max(6)
})