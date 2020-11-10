import {useState} from 'react';

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (FormType, formValue) => {
      return setValues({...values, [FormType]: formValue});
    },
  ];
};
