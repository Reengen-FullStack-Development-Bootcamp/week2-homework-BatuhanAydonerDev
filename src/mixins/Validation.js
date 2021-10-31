import {
  required,
  email,
  minLength,
  maxLength,
  minValue,
} from "vuelidate/lib/validators";
export default {
  validations: {
    form: {
      name: {
        required,
      },
      surname: {
        required,
      },
      email: {
        email,
      },
      phone: {
        minLength: minLength(10),
        maxLength: maxLength(10),
        phone(val) {
          if (val && val[0] === "5") {
            return true;
          }
          return false;
        },
      },
      age: {
        required,
        min: minValue(6),
      },
      hesCode: {
        required,
        format(val) {
          if (
            val === undefined ||
            val === null ||
            val.length !== 12 ||
            val.split("")[4] !== "-" ||
            val.split("")[9] !== "-"
          ) {
            return false;
          }
          return true;
        },
      },
      tc: {
        required,
        format(val) {
          if (val === undefined || val === null || val.length !== 11) {
            return false;
          }
          return true;
        },
      },
    },
  },
};
