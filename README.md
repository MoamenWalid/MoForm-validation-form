
## Custom Hook Validation Form
  #### To install Project
  ```
    npm i
    npm start
  ```

  #### How To Use It !
  - First custom hook called `useMoForm`
  - Second function to validation called `movaly`

  ``` jsx
    useMoForm({
      inisialState: {
        nameUser: '',
        emailUser: '',
        passwordUser: ''
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      }
      // movaly -> func to validation //
    }, movaly)
  ```

  `Carful: inisialState keys inside useMoForm hook must be same input name`

  ```jsx
    inisialState: {
        nameUser: '',
        emailUser: '',
        passwordUser: ''
      },

      /// These is wrong
      <input name="name" />
      <input name="email" />
      <input name="password" />

      /// These is true
      <input name="nameUser" />
      <input name="emailUser" />
      <input name="passwordUser" />
  ```