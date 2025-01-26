import React, { useState, useEffect } from "react";
import axios from "axios";

const DropdownEspecial = ({ label, valorMarca, valorCategoria, onValorSelecionado }) => {
    const [valores, setValores] = useState([]);
    const [mensagem, setMensagem] = useState(""); // Estado para armazenar a mensagem de erro

    const verificarUrlModelo = (valorMarca, valorCategoria) => {
        if (!valorCategoria && !valorMarca) {
            return `http://localhost:8080/api/modelo/`;
        } else if (!valorCategoria) {
            return `http://localhost:8080/api/modelo?idMarca=${valorMarca}`;
        } else if (!valorMarca) {
            return `http://localhost:8080/api/modelo?categoria=${valorCategoria}`;
        } else {
            return `http://localhost:8080/api/modelo?categoria=${valorCategoria}&idMarca=${valorMarca}`;
        }
    };

    const handleChange = (event) => {
        const valor = event.target.value;
        onValorSelecionado(label, valor); // Prop enviada para o componente pai
    };

    const valorMaiusculo = (valor) => {
        if (!valor) return "";
        return valor[0].toUpperCase() + valor.slice(1);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = verificarUrlModelo(valorMarca, valorCategoria);
                console.log("URL gerada:", url); // Para depuração
                const resultado = await axios.get(url);
    
                if (resultado.data.length === 0) {
                    setMensagem("Nenhum modelo encontrado para a marca e categoria exigidas.");
                    setValores([]);
                } else {
                    setMensagem("");
                    setValores(resultado.data);
                }
            } catch (error) {
                // Ignorar erro 404 e definir valores padrão
                if (error.response && error.response.status === 404) {
                    console.warn("Nenhum dado encontrado (404).");
                    setMensagem("Nenhum modelo encontrado.");
                    setValores([]); // Define lista vazia como padrão
                } else {
                    // Outros erros
                    console.error("Erro ao buscar dados:", error);
                    setMensagem("Erro ao buscar dados. Tente novamente mais tarde.");
                }
            }
        };
    
        fetchData();
    }, [valorMarca, valorCategoria]);

    return (
        <div className="campodePrenchimento">
            <div className="select">
                <label>
                    <p>{valorMaiusculo(label)}</p>
                    <select defaultValue="" onChange={handleChange} disabled={valores.length === 0}>
                        <option disabled={true} value="">
                            Escolha
                        </option>
                        {valores?.map(item => (
                            <option
                                key={item[`id_${label}`]}
                                value={item[`id_${label}`]}
                            >
                                {item[`nome_${label}`]}
                            </option>
                        ))}
                    </select>
                </label>
                {mensagem && <p style={{ color: "red" }}>{mensagem}</p>} {/* Exibe a mensagem em vermelho */}
            </div>
        </div>
    );
};

export default DropdownEspecial;
