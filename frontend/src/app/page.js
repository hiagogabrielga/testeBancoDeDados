'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function teste() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/dados?dados=cor')
      .then(response => setData(response.data));
  }, []);
  return (
    <div>
      {data.map(item => (
        <div key={item.idCor}>
          {item.nomeCor}
        </div>
      ))}
    </div>
  );
}
