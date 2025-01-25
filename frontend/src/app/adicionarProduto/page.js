'use client';
import axios from "axios";
import React, { useState, useEffect } from "react";
import Dropdown from "./DropDown";
import DropdownEspecial from "./DropDownEspecial";

export default function AdicionarProduto() {
  const [selecionado, setSelecionado] = useState();
  const [valorCor, setCor] = useState()
  const [valorMarca, setValorMarca] = useState()
  const [valorModelo, setValorModelo] = useState()
  const [valorAro, setValorAro] = useState()
  const [valorCondicao, setCondicao] = useState()
  const [valorCategoria, setValorCategoria] = useState()
  const [valorCombustivel, setValorCombustivel] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Dados a serem enviados:", selectedValues);
      // Enviar os dados para a API
      // await axios.post("http://localhost:8080/api/enviar-dados", selectedValues);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  const handleValorSelecionado = (label, valor) => {
    setSelecionado(label);
    switch (label) {
      case "marca":
        valorMarca = valor
        break;
      case "aro":
        valorAro = valor
        break;
      case "modelo":
        valorModelo = valor
        break;
      case "combustivel":
        valorCombustivel = valor
        break;
      case "condicao":
        valorCondicao = valor
        break;
      case "marca":
        valorMarca = valor
        break;
      case "categoria":
        valorCategoria = valor
        break;
      case "cor":
        valorCor = valor
        break;
      default:
    
        break;
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Dropdown
          label='marca'
          onValorSelecionado={handleValorSelecionado}
        />
        <p>Valor Selecionado: {selecionado}</p>
        <Dropdown
          label='categoria'
        />
        <DropdownEspecial
          label='modelo'
          valorMarca={valorMarca}
          valorCategoria={valorCategoria}
        />
        <Dropdown
          label='aro'
        />
        <Dropdown
          label='combustivel'
        />

        <Dropdown
          label='cor'
        />
        <div className="campodePrenchimento">
          <div className="select">
            <select defaultValue="">
              <option disabled={true} value="">Escolha</option>
              <option value="novo" key="valorNovo">Novo</option>
              <option value="semi-novo" key="valorSeminovo">Semi novo</option>
              <option value="usado" key="valorUsado">Usado</option>
            </select>
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
