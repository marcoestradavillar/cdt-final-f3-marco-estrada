import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const [doctor, setDoctor] = useState({});
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        setDoctor(res.data); // Suponiendo que la respuesta contiene los datos del doctor
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);
  return (
    <div>
      <img src="/src/assets/doctor.jpg" alt="" />
      <h3>{doctor.name}</h3>
      <h3>{doctor.email}</h3>
      <h3>{doctor.phone}</h3>
      <h3>{doctor.website}</h3>
    </div>
  )
}

export default Detail