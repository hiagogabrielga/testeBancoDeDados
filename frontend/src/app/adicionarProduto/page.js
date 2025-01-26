'use client';
import axios from "axios";
import React, { useState } from "react";
import Dropdown from "./DropDown";
import DropdownEspecial from "./DropDownEspecial";

export default function AdicionarProduto() {
  const [selecionado, setSelecionado] = useState();
  const [valorCor, setCor] = useState();
  const [valorMarca, setValorMarca] = useState();
  const [valorModelo, setValorModelo] = useState();
  const [valorAro, setValorAro] = useState();
  const [valorCondicao, setCondicao] = useState();
  const [valorCategoria, setValorCategoria] = useState();
  const [valorCombustivel, setValorCombustivel] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedValues = {
      marca: valorMarca,
      aro: valorAro,
      modelo: valorModelo,
      combustivel: valorCombustivel,
      condicao: valorCondicao,
      categoria: valorCategoria,
      cor: valorCor,
    };

    try {
      console.log("Dados a serem enviados:", selectedValues);
      await axios.post("http://localhost:8080/api/enviar-dados", selectedValues);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  const handleValorSelecionado = (label, valor) => {
    setSelecionado(label);
    switch (label) {
      case "marca":
        setValorMarca(valor);
        break;
      case "aro":
        setValorAro(valor);
        break;
      case "modelo":
        setValorModelo(valor);
        break;
      case "combustivel":
        setValorCombustivel(valor);
        break;
      case "condicao":
        setCondicao(valor);
        break;
      case "categoria":
        setValorCategoria(valor);
        break;
      case "cor":
        setCor(valor);
        break;
      default:
        console.warn("Label não reconhecido:", label);
        break;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Dropdown label="marca" onValorSelecionado={handleValorSelecionado} />
        <p>Valor Selecionado: {valorMarca}</p>
        <Dropdown label="categoria" onValorSelecionado={handleValorSelecionado} />
        <p>Valor Selecionado: {valorCategoria}</p>
        <DropdownEspecial
          label="modelo"
          valorMarca={valorMarca}
          valorCategoria={valorCategoria}
          onValorSelecionado={handleValorSelecionado}
        />
        <Dropdown label="aro" onValorSelecionado={handleValorSelecionado} />
        <Dropdown label="combustivel" onValorSelecionado={handleValorSelecionado} />
        <Dropdown label="cor" onValorSelecionado={handleValorSelecionado} />
        <div className="campodePrenchimento">
          <div className="select">
            <select
              value={valorCondicao || ""}
              onChange={(e) => setCondicao(e.target.value)}
            >
              <option disabled value="">
                Escolha
              </option>
              <option value="novo">Novo</option>
              <option value="semi-novo">Semi novo</option>
              <option value="usado">Usado</option>
            </select>
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
