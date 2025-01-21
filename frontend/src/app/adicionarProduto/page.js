'use client'
import axios from "axios";
import React, { useState } from "react";

export default function AdicionarProduto() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    axios.post(`http://localhost:8080/api/enviarDados?tabela=cor&nome=${value}`)
    .then((response) => {
        alert("Dado adicionado com sucesso!");
      })
      .catch((error) => {
        console.error('Erro ao enviar dados:', error);
        alert("Houve um erro ao adicionar os dados.");
      });
    event.preventDefault();
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <label>
        Nome:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
}
