'use client';
import axios from "axios";
import React, { useState } from "react";
import Dropdown from "./dropDown.js";
import DropdownEspecial from "./dropDownEspecial.js";
import controleDadosImagem from "./controleDeDadosImagem.js";
import { formatarQuilometragem, validarAno, formatarValorMonetario, validarAnoCalendario } from "./controleDeDadosSimples.js";

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
  const [valorImagens, setImagens] = useState([]); // Alterado para array
  const [valorDetalhes, setDetalhes] = useState();
  const [valorQuilometragem, setQuilometragem] = useState();
  const [errorMessage, setErrorMessage] = useState(''); // Adicionado para mensagem de erro
  const [imagePreview, setImagePreview] = useState(null);

  // Atualiza a pré-visualização das imagens sem modificar o estado diretamente

  // Função para verificar se o número mínimo de imagens foi atendido
  const validateImageCount = (images) => {
    if (images.length < 5) {
      setErrorMessage('Por favor, selecione pelo menos 5 imagens.');
    } else {
      setErrorMessage('');
    }
  };

  // Evento ao selecionar as imagens
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
      imagens: valorImagens ? controleDadosImagem(valorImagens) : [],
      blindagem: valorBlindagem,
      dataCompra: valorDataCompra,
      nome: valorNome,
      ipva: valorIpva,
      dataIpva: valorDataIpva,
      detalhes: valorDetalhes,
      contatoEmail: valorContatoEmail,
      contatoNumero: valorContatoNumero,
      quilometragem: valorQuilometragem,
    };

    try {
      console.log("Dados a serem enviados:", selectedValues);
      // Descomente para enviar para a API:
      // await axios.post("http://localhost:8080/api/enviar-dados", selectedValues);
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

  // Variáveis para converter checkbox em valores binários
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
          <label>
            <p>Condição do veículo</p>
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
          </label>
        </div>

        <div>
          <label>
            Ano
            <input
              type="number"
              name="ano"
              onBlur={(e) => validarAno(e.target)}
              onChange={(e) => setAno(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Data compra
            <input
              type="date"
              name="dataCompra"
              onChange={(e) => setDataCompra(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            IPVA
            <input
              type="checkbox"
              name="ipva"
              checked={checkboxValues.ipva}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>

        <div>
          <label>
            Data IPVA
            <input
              type="date"
              name="dataIpva"
              onBlur={(e) => validarAnoCalendario(e.target)}
              onChange={(e) => setDataIpva(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Blindagem
            <input
              type="checkbox"
              name="blindagem"
              checked={checkboxValues.blindagem}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>

        <div>
          <label>
            Quilometragem
            <input
              type="text"
              name="quilometragem"
              onBlur={(e) => formatarQuilometragem(e.target)}
              onChange={(e) => setQuilometragem(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Nome de exibição
            <input
              type="text"
              name="nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Imagens do produto
            <input
              id="file-upload"
              type="file"
              name="imagens"
              onChange={(e) => { setImagens(Array.from(e.target.files)), handleFileChange(e) }}
              multiple
            />
          </label>
          <div className="image-preview-area">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Pré-visualização"
                style={{ maxWidth: '300px', display: 'block', marginTop: '10px' }}
              />
            )}
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>

        <div>
          <label>
            Detalhes
            <textarea
              name="detalhes"
              cols="30"
              rows="10"
              onChange={(e) => setDetalhes(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Valor do produto
            <input
              type="text"
              name="valor"
              onBlur={(e) => formatarValorMonetario(e.target)}
              onChange={(e) => setValor(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Contatos para negociações
            <div>
              <label>
                Número
                <input
                  type="checkbox"
                  name="contatoNumero"
                  checked={checkboxValues.contatoNumero}
                  onChange={handleCheckboxChange}
                />
              </label>

              <label>
                E-mail
                <input
                  type="checkbox"
                  name="contatoEmail"
                  checked={checkboxValues.contatoEmail}
                  onChange={handleCheckboxChange}
                />
              </label>
            </div>
          </label>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}