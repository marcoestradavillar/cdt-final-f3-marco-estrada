import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones
    if (name.length <= 5 || !validateEmail(email)) {
      setError('Por favor verifique su información nuevamente');
      setSuccessMessage('');
    } else {
      setError('');
      setSuccessMessage(`Gracias ${name}, te contactaremos pronto vía mail.`);
      // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor.
      // Puedes imprimir en la consola para este ejemplo.
      console.log('Nombre:', name);
      console.log('Email:', email);
    }
  };

  // Función para validar el formato del email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};


export default Contact