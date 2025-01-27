'use client';
import axios from "axios";
import React, { useState } from "react";
import Dropdown from "./DropDown";
import DropdownEspecial from "./DropDownEspecial";

export default function AdicionarProduto() {
  const [valorCor, setCor] = useState();
  const [valorMarca, setMarca] = useState();
  const [valorModelo, setModelo] = useState();
  const [valorAro, setAro] = useState();
  const [valorCondicao, setCondicao] = useState();
  const [valorCategoria, setCategoria] = useState();
  const [valorCombustivel, setCombustivel] = useState();
  const [valorAno, setAno] = useState();
  const [valorDataCompra, setDataCompra] = useState();
  const [valorNome, setNome] = useState();
  const [checkboxValues, setCheckboxValues] = useState({
    ipva: false,
    blindagem: false,
    contatoNumero: false,
    contatoEmail: false,
  });
  const [valorDataIpva, setDataIpva] = useState();
  const [valorValor, setValor] = useState();
  const [valorImagens, setImagens] = useState();
  const [valorDetalhes, setDetalhes] = useState();
  const [valorQuilometragem, setQuilometragem] = useState();



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
      ano: valorAno,
      valor: valorValor,
      valorImagens: valorImagens,
      valorBlindagem: valorBlindagem,
      valorDataCompra: valorDataCompra,
      valorNome: valorNome,
      valorIpva: valorIpva,
      valorDataIpva: valorDataIpva,
      valorDetalhes: valorDetalhes,
      valorContatoEmail: valorContatoEmail,
      valorContatoNumero: valorContatoNumero,
      valorQuilometragem: valorQuilometragem,
    };


    try {
      console.log("Dados a serem enviados:", selectedValues);
      await axios.post("http://localhost:8080/api/enviar-dados", selectedValues);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const valorIpva = checkboxValues.ipva ? '1' : '0';
  const valorBlindagem = checkboxValues.blindagem ? '1' : '0';
  const valorContatoEmail = checkboxValues.contatoEmail ? '1' : '0';
  const valorContatoNumero = checkboxValues.contatoNumero ? '1' : '0';

  const handleValorSelecionado = (label, valor) => {
    switch (label) {
      case "marca":
        setMarca(valor);
        break;
      case "aro":
        setAro(valor);
        break;
      case "modelo":
        setModelo(valor);
        break;
      case "combustivel":
        setCombustivel(valor);
        break;
      case "categoria":
        setCategoria(valor);
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

        <Dropdown label="categoria" onValorSelecionado={handleValorSelecionado} />

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
            <label>
              <p>Condição do veículo</p>
            </label>
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
        <div>
          <label>
            Ano
            <div>
              <input type="date" onChange={(e) => setAno(e.target.value)} />
            </div>
            <p>{valorAno}</p>
          </label>
        </div>
        <div>
          <label>
            Data compra
            <div>
              <input type="date" onChange={(e) => setAno(e.target.value)} />
            </div>
          </label>
        </div>
        <div>
          <label>
            Ipva
            <div>
              <input
                type="checkbox"
                //onChange={(e) => setIpva(e.target.value)}
                name="ipva"
                checked={checkboxValues.ipva}
                onChange={handleCheckboxChange}
              />
            </div>
          </label>
        </div>
        <div>
          <label>
            Data Ipva
            <div>
              <input type="date" onChange={(e) => setDataIpva(e.target.value)} />
            </div>
          </label>
        </div>
        <div>
          <label>
            Blidagem
            <div>
              <input
                type="checkbox"
                name="blindagem"
                checked={checkboxValues.blindagem}
                onChange={handleCheckboxChange} />
            </div>
          </label>
        </div>
        <div>
          <label>
            Quilometragem
            <div>
              <input type="text" onChange={(e) => setQuilometragem(e.target.value)} />
            </div>
          </label>
        </div>
        <div>
          <label>
            Nome de exibição
            <div>
              <input type="text" onChange={(e) => setNome(e.target.value)} />
            </div>
          </label>
        </div>
        <div>
          <label>
            Imagens do produto
            <div>
              <input type="file" onChange={(e) => setImagens(e.target.value)} />
            </div>
          </label>
        </div>
        <div>
          <label>
            Detalhes
            <div>
              <textarea cols="30" rows="10" onChange={(e) => setDetalhes(e.target.value)} ></textarea>
            </div>
          </label>
        </div>
        <div>
          <label>
            Valor do produto
            <div>
              <input type="text" onChange={(e) => setValor(e.target.value)} />
            </div>
          </label>
        </div>
        <div>
          <label>
            Contatos para negociações
            <div>
              <div>
                <label>
                  Número
                  <input type="checkbox"
                  name="contatoNumero"
                  checked={checkboxValues.contatoNumero}
                  onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  E-mail
                  <input type="checkbox"
                  name="contatoEmail"
                  checked={checkboxValues.contatoEmail}
                  onChange={handleCheckboxChange} />
                </label>
              </div>
            </div>
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
