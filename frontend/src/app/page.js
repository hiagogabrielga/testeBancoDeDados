'use client'
import * as ReactDom from 'react-dom';
var ReactDom = require('react-dom')
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const nomeTabela = 'cor'

export default function teste() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/mostrarDados?tabela=${nomeTabela}`)
      .then(response => setData(response.data));
  }, []);
  return (
    <div>
      {data.map(item => (
        <div key={item[`id_${nomeTabela}`]}>
          <p>{item[`id_${nomeTabela}`]} - {item[`nome_${nomeTabela}`]}</p>
        </div>
      ))}
    </div>
  );
}
