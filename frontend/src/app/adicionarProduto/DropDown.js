import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./page.module.css";

const Dropdown = ({ label, onValorSelecionado, dropdownAberto, setDropdownAberto }) => {
    const [valores, setValores] = useState([]);
    const [selecionado, setSelecionado] = useState("Escolha"); // Estado para exibir a opção escolhida
    const [selecionadoId, setSelecionadoId] = useState(null); // Estado para armazenar o ID do item selecionado

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resultado = await axios.get(`http://localhost:8080/api/${label}`);
                console.log(resultado.data)
                setValores(resultado.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        fetchData();
    }, [label]);

    const handleSelecionar = (valor, nome) => {
        setSelecionado(nome);
        setSelecionadoId(valor); // Atualiza o ID do item selecionado
        setDropdownAberto(""); // Fecha o dropdown após a seleção
        onValorSelecionado(label, valor);
    };

    const handleAbrirDropdown = () => {
        setDropdownAberto(dropdownAberto === label ? "" : label);
    };

    return (
        <div className={styles.filhoCampoDuasColunas}>
            <div className={styles.campodePrenchimentoDropDown}>
                <div className={styles.selectContainer}>
                    <p className={styles.label}>{label[0].toUpperCase() + label.slice(1)}</p>

                    <div
                        className={styles.customSelect}
                        onClick={handleAbrirDropdown}
                    >
                        <span>{selecionado}</span>
                        <span className={styles.arrow}>
                            {dropdownAberto === label ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg>
                            )}
                        </span>
                    </div>

                    {dropdownAberto === label && (
                        <ul className={styles.dropdownLista}>
                            {valores.map((item) => (
                                <li
                                    key={item[`id_${label}`]}
                                    className={`${styles.dropdownItem} ${selecionadoId === item[`id_${label}`] ? styles.itemSelecionado : ""}`}
                                    onClick={() => handleSelecionar(item[`id_${label}`], item[`nome_${label}`])}
                                >
                                    {item[`nome_${label}`]}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
