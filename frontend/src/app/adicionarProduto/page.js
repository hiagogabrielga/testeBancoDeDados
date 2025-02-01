'use client';
import axios from "axios";
import React, { useState } from "react";
import Dropdown from "./dropDown.js";
import DropdownEspecial from "./dropDownEspecial.js";
import controleDadosImagem from "./controleDeDadosImagem.js";
import DropdownSimulado from "./dropDownCodicao.js";
import styles from "./page.module.css"
import { formatarQuilometragem, validarAno, formatarValorMonetario, validarAnoCalendario } from "./controleDeDadosSimples.js";

export default function AdicionarProduto() {
  const [dropdownAberto, setDropdownAberto] = useState("");
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
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length) {
      const newPreviews = [];
      for (let index = 0; index < files.length; index++) {
        const imagem = files[index];
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviews((prevPreviews) => [...prevPreviews, reader.result]);
        };
        reader.readAsDataURL(imagem);
      }
    }
  };

  const [exibirData, setExibirData] = useState(false)

  const apresentarDataVencimento = (event) => {
    setExibirData(event.target.checked);
    if (event.target.checked == false) {
      setDataIpva(null)
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
      case "condicao":
        setCondicao(valor);
        break;
      default:
        console.warn("Label não reconhecido:", label);
        break;
    }
  };

  return (
    <div className={styles.mainAdicionarVeiculo}>
      <form onSubmit={handleSubmit}>
        <div className={styles.fundoCampoAdicionarVeiculo}>
          <div className={styles.campoDuasColunas}>
            <Dropdown
              label="marca"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto} />

            <Dropdown
              label="categoria"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto} />

            <DropdownEspecial
              label="modelo"
              valorMarca={valorMarca}
              valorCategoria={valorCategoria}
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto}
            />

            <Dropdown
              label="aro"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto} />

            <Dropdown
              label="combustivel"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto} />

            <Dropdown
              label="cor"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto} />

            <DropdownSimulado
              label="condicao"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto}
            />

            <div className={styles.filhoCampoDuasColunas}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>
                  Ano
                </label>
                <input
                  type="number"
                  name="ano"
                  onBlur={(e) => validarAno(e.target)}
                  onChange={(e) => setAno(e.target.value)}
                  placeholder="Ex: 2007"
                />

              </div>
            </div>

            <div className={styles.filhoCampoDuasColunas}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>
                  Data compra
                </label>
                <input id={styles.campoInputDataCompra}
                  type="date"
                  name="dataCompra"
                  onBlur={(e) => validarAnoCalendario(e.target)}
                  onChange={(e) => setDataCompra(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.filhoCampoDuasColunas}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>
                  Quilometragem
                </label>
                <input
                  type="text"
                  name="quilometragem"
                  onBlur={(e) => formatarQuilometragem(e.target)}
                  onChange={(e) => setQuilometragem(e.target.value)}
                  placeholder="Ex: 1.200,00 Km"
                />

              </div>
            </div>

            <div className={styles.filhoCampoDuasColunas}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>
                  IPVA
                </label>
                <input
                  type="checkbox"
                  id="ipva"
                  name="ipva"
                  checked={checkboxValues.ipva}
                  onChange={(e) => { apresentarDataVencimento(e), handleCheckboxChange(e) }}
                  className={styles.checkbox}
                />
                <label htmlFor="ipva" className={styles.labelChekBox} ></label>
              </div>
            </div>

            <div className={styles.filhoCampoDuasColunas}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>Blindagem</label>
                <input
                  type="checkbox"
                  id="blindagem"
                  name="blindagem"
                  checked={checkboxValues.blindagem}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
                <label htmlFor="blindagem" className={styles.labelChekBox}></label>
              </div>
            </div>
          </div>
          <div>
            {exibirData && (
              <div>
                <label className={styles.label}>
                  Data IPVA
                </label>
                <input
                  type="date"
                  name="dataIpva"
                  onBlur={(e) => validarAnoCalendario(e.target)}
                  onChange={(e) => setDataIpva(e.target.value)}
                  onLoad={(e) => setComponenteDataIpva(e.target)}
                />
              </div>
            )}
            <div>
              <label className={styles.label}>
                Nome de exibição
              </label>
              <input
                type="text"
                name="nome"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div>
              <label className={styles.label}>
                Imagens do produto
              </label>
              <input
                id="file-upload"
                type="file"
                name="imagens"
                onChange={(e) => { setImagens(Array.from(e.target.files)), handleFileChange(e) }}
                multiple
              />
              <div className="image-preview-area">
                {imagePreviews.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt={`Pré-visualização ${index + 1}`}
                    className={styles.imagemVeiculo}
                  />
                ))}
              </div>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>

            <div>
              <label className={styles.label}>
                Detalhes
              </label>
              <textarea
                name="detalhes"
                cols="30"
                rows="10"
                onChange={(e) => setDetalhes(e.target.value)}
              />
            </div>

            <div>
              <label className={styles.label}>
                Valor do produto
              </label>
              <input
                type="text"
                name="valor"
                onBlur={(e) => formatarValorMonetario(e.target)}
                onChange={(e) => setValor(e.target.value)}
              />
            </div>

            <div>
              <label className={styles.label}>
                Contatos para negociações
              </label>
              <div>
                <label className={styles.label}>
                  Número
                </label>
                <input
                  type="checkbox"
                  name="contatoNumero"
                  checked={checkboxValues.contatoNumero}
                  onChange={handleCheckboxChange}
                />

                <label className={styles.label}>
                  E-mail
                </label>
                <input
                  type="checkbox"
                  name="contatoEmail"
                  checked={checkboxValues.contatoEmail}
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form >
    </div >
  );
}