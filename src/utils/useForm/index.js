import {useState} from 'react';

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (FormType, formValue) => {
      if (FormType === 'reset') {
        return setValues(initialValue);
      }
      return setValues({...values, [FormType]: formValue});
    },
  ];
};
