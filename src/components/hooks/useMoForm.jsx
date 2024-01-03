import { useEffect, useState } from "react";

const UseMoForm = (data, validate) => {
  const [values, setValues] = useState(data.inisialState);
  const [toutched, setToutched] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(values));
  }, [validate, values])

  const handleBlur = (event) => {
    const name = event.target.name;
    setToutched(prev => ({...prev, [name]: true}));
  }
  
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setValues(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) data.onSubmit(values);
    Object.keys(data.inisialState).map(key => setToutched(prev => ({...prev, [key]: true})));
  }

  return {
    values,
    toutched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit
  }
}

export default UseMoForm;