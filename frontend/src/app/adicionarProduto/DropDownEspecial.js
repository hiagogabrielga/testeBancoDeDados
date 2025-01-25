import React, { useState, useEffect } from "react";
import axios from "axios";

const DropdownEspecial = ({ label, valorMarca, valorCategoria }) => {
    const [valores, setValores] = useState([]);
    const [dropdownAberto, setDropdownAberto] = useState(false);
    var valorUrl
    if (!valorCategoria && !valorMarca) {
        valorUrl =  `http://localhost:8080/api/modelo`
    } else if (!valorCategoria){
        valorUrl = `http://localhost:8080/api/modelo?idMarca=${valorMarca}`
    } else if (!valorMarca){
        valorUrl = `http://localhost:8080/api/modelo?categoria=${valorCategoria}`
    } else {
        valorUrl = `http://localhost:8080/api/modelo?categoria=${valorCategoria}&idMarca=${valorMarca}`
    }

    const abrirFecharDropDown = () => {
        setDropdownAberto((prevState) => !prevState); // Alterna entre true e false
    };

    const handleChange = (event) => {
        const valor = event.target.value;
        onValorSelecionado(valor);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const resultado = await axios.get(`http://localhost:8080/api/modelo?categoria=${valorCategoria}&idMarca=${valorMarca}`);
                setValores(resultado.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, [valorMarca, valorCategoria]);

    return (
        <div className="campodePrenchimento">
            <div className="select">
                <select defaultValue="">
                    <option disabled={true} value="">Escolha</option>
                    {valores.map(item => (
                        <option key={item[`id_${label}`]} value={item[`id_${label}`]}>{item[`nome_${label}`]}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default DropdownEspecial;