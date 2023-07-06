export const userNameValidator = (username) => {
    if (!username) {
        return 'User name is required';
    } else if (username.length < 8) {
        return 'User name must have a minimum 8 characters';
    }
    return '';
};

export const firstNameValidator = (firstName) => {
    if (!firstName) {
        return 'FirstName is required';
    } else if (firstName.length < 8) {
        return 'FirstName must have a minimum 8 characters';
    }
    return '';
};

export const lastNameValidator = (lastName) => {
    if (!lastName) {
        return 'Last name is required';
    } else if (lastName.length < 8) {
        return 'Last name must have a minimum 8 characters';
    }
    return '';
};

export const emailValidator = (email) => {
    if (!email) {
      return 'Email is required';
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return 'Incorrect email format';
    }
    return '';
  };

export const genderValidator = (gender) => {
    if (!gender) {
        return 'Gender is required';
    } else if (gender.length < 8) {
        return 'Gender must have a minimum 8 characters';
    }
    return '';
};

export const passwordValidator = (password) => {
    if (!password) {
        return 'Password is required';
    } else if (password.length < 6) {
        return 'Password must have a minimum 8 characters';
    }
    return '';
};

export const imageValidator = (image) => {
    if (!image) {
        return 'Image is required';
    }
    return '';
};

export const phoneValidator = (phone) => {
    if (!phone) {
        return 'Phone is required';
    }
    return '';
};

