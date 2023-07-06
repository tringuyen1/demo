import { useState } from "react";

import {
    userNameValidator,
    passwordValidator,
    firstNameValidator,
    lastNameValidator,
    emailValidator,
    genderValidator,
    imageValidator,
    phoneValidator
} from "./validators";

const touchErrors = errors => {
    return Object.entries(errors).reduce((acc, [field, fieldError]) => {
        acc[field] = {
            ...fieldError,
            dirty: true,
        };
        return acc;
    }, {});
};

export const useValidator = form => {
    const [errors, setErrors] = useState({
        username: {
            dirty: false,
            error: false,
            message: "",
        },
        password: {
            dirty: false,
            error: false,
            message: "",
        },
        firstName: {
            dirty: false,
            error: false,
            message: "",
        },
        lastName: {
            dirty: false,
            error: false,
            message: "",
        },
        email: {
            dirty: false,
            error: false,
            message: "",
        },
        gender: {
            dirty: false,
            error: false,
            message: "",
        },
        image: {
            dirty: false,
            error: false,
            message: "",
        },
        phone: {
            dirty: false,
            error: false,
            message: "",
        },
    });

    const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
        let isValid = true;

        // Create a deep copy of the errors
        let nextErrors = JSON.parse(JSON.stringify(errors));

        // Force validate all the fields
        if (forceTouchErrors) {
            nextErrors = touchErrors(errors);
        }

        const { username, password } = form;

        if (nextErrors.username.dirty && (field ? field === "username" : true)) {
            const usernameMessage = userNameValidator(username, form);
            nextErrors.username.error = !!usernameMessage;
            nextErrors.username.message = usernameMessage;
            if (!!usernameMessage) isValid = false;
        }

        if (nextErrors.password.dirty && (field ? field === "password" : true)) {
            const passwordMessage = passwordValidator(password, form);
            nextErrors.password.error = !!passwordMessage;
            nextErrors.password.message = passwordMessage;
            if (!!passwordMessage) isValid = false;
        }

        setErrors(nextErrors);

        return {
            isValid,
            errors: nextErrors,
        };
    };

    const validateFormAdd = ({ form, field, errors, forceTouchErrors = false }) => {
        let isValid = true;

        // Create a deep copy of the errors
        let nextErrors = JSON.parse(JSON.stringify(errors));

        // Force validate all the fields
        if (forceTouchErrors) {
            nextErrors = touchErrors(errors);
        }

        const { firstName, lastName, username, email, gender } = form;

        if (nextErrors.firstName.dirty && (field ? field === "firstName" : true)) {
            const firstNameMessage = firstNameValidator(firstName, form);
            nextErrors.firstName.error = !!firstNameMessage;
            nextErrors.firstName.message = firstNameMessage;
            if (!!firstNameMessage) isValid = false;
        }

        if (nextErrors.lastName.dirty && (field ? field === "lastName" : true)) {
            const lastNameMessage = lastNameValidator(lastName, form);
            nextErrors.lastName.error = !!lastNameMessage;
            nextErrors.lastName.message = lastNameMessage;
            if (!!lastNameMessage) isValid = false;
        }

        if (nextErrors.username.dirty && (field ? field === "username" : true)) {
            const usernameMessage = userNameValidator(username, form);
            nextErrors.username.error = !!usernameMessage;
            nextErrors.username.message = usernameMessage;
            if (!!usernameMessage) isValid = false;
        }

        if (nextErrors.email.dirty && (field ? field === "email" : true)) {
            const emailMessage = emailValidator(email, form);
            nextErrors.email.error = !!emailMessage;
            nextErrors.email.message = emailMessage;
            if (!!emailMessage) isValid = false;
        }

        if (nextErrors.gender.dirty && (field ? field === "gender" : true)) {
            const genderMessage = genderValidator(gender, form);
            nextErrors.gender.error = !!genderMessage;
            nextErrors.gender.message = genderMessage;
            if (!!genderMessage) isValid = false;
        }

        if (nextErrors.image.dirty && (field ? field === "image" : true)) {
            const imageMessage = imageValidator(gender, form);
            nextErrors.image.error = !!imageMessage;
            nextErrors.image.message = imageMessage;
            if (!!imageMessage) isValid = false;
        }

        if (nextErrors.phone.dirty && (field ? field === "phone" : true)) {
            const phoneMessage = phoneValidator(gender, form);
            nextErrors.phone.error = !!phoneMessage;
            nextErrors.phone.message = phoneMessage;
            if (!!phoneMessage) isValid = false;
        }

        setErrors(nextErrors);

        return {
            isValid,
            errors: nextErrors,
        };
    };

    const onBlurField = e => {
        const field = e.target.name;
        const fieldError = errors[field];
        if (fieldError.dirty) return;

        const updatedErrors = {
            ...errors,
            [field]: {
                ...errors[field],
                dirty: true,
            },
        };

        validateForm({ form, field, errors: updatedErrors });
    };

    const onBlurFieldAdd = e => {
        const field = e.target.name;
        const fieldError = errors[field];
        if (fieldError.dirty) return;

        const updatedErrors = {
            ...errors,
            [field]: {
                ...errors[field],
                dirty: true,
            },
        };

        validateFormAdd({ form, field, errors: updatedErrors });
    };

    return {
        validateForm,
        validateFormAdd,
        onBlurField,
        onBlurFieldAdd,
        errors,
    };
};
