export const validate = (val: any, rules: {[key: string]: any}, connectedValue: any) => {
  let errors: string[] = [];

  for (let rule in rules) {
    switch (rule) {
      case 'isEmail':
        if (!emailValidator(val)) { errors.push("Invalid email") }
        break;
      case 'minLength':
        if (!minLengthValidator(val, rules[rule])) { errors.push("Too short") }
        break;
      case 'maxLength':
        if (!maxLengthValidator(val, rules[rule])) { errors.push("Too Long") }
        break;
      case 'equalTo':
        if (!equalToValidator(val, connectedValue[rule])) { errors.push("Invalid email") }
        break;
      case 'notEmpty':
        if (!notEmptyValidator(val)) { errors.push("Can't be empty") }
        break;
      default:
        errors = [];
    }
  }

  return errors;
}

const isValid = (errors: string[]) => errors.length === 0;

const emailValidator = (val: string ) => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	.test(val)
}

const minLengthValidator = (val: string, minLength: number) => {
	return val.length >= minLength;
}

const maxLengthValidator = (val: string, maxLength: number) => {
	return val.length <= maxLength;
}

const equalToValidator = (val: string, checkValue: string) => {
	return val === checkValue;
}

const notEmptyValidator = (val: string) => {
	return val.trim() !== '';
}
