
import useMoForm from "./hooks/useMoForm";
import movaly from "./hooks/movaly";
import InputBox from "./InputBox";

const Form = () => {
  const moForm = useMoForm({
    inisialState: {
      nameUser: '',
      emailUser: '',
      passwordUser: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  }, movaly)

  return (
    <div>
      <h1 className="regester">Regester</h1>
      <form action="#" onSubmit={moForm.handleSubmit}>
        <div>
          <InputBox labelFor='nameField' lable='Name' onBlur={moForm.handleBlur} onChange={moForm.handleChange} type="text" placeholder="Name" id="nameField" name="nameUser" value={moForm.values.nameUser} />
          <span>{moForm.toutched.nameUser && moForm.errors.nameUser ? moForm.errors.nameUser : null}</span>
        </div>

        <div>
          <InputBox labelFor='emailField' lable='Email' onBlur={moForm.handleBlur} onChange={moForm.handleChange} type="text" placeholder="Email" id="emailField" name="emailUser" value={moForm.values.emailUser} />
          <span>{moForm.toutched.emailUser && moForm.errors.emailUser ? moForm.errors.emailUser : null}</span>
        </div>

        <div>
          <InputBox labelFor='passwordField' lable='Password' onBlur={moForm.handleBlur} onChange={moForm.handleChange} type="text" placeholder="Password" id="passwordField" name="passwordUser" value={moForm.values.passwordUser} />
          <span>{moForm.toutched.passwordUser && moForm.errors.passwordUser ? moForm.errors.passwordUser : null}</span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;