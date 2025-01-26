import React, { useState, useEffect } from "react";
import axios from "axios";

const Dropdown = ({ label, onValorSelecionado }) => {
    const [valores, setValores] = useState([]);

    const handleChange = (event) => {
        const valor = event.target.value;
        onValorSelecionado(label, valor);
    };

    const valorMaiusculo = (valor) => {
        const valorAlterado = valor[0].toUpperCase() + valor.slice(1)
        return valorAlterado
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const resultado = await axios.get(`http://localhost:8080/api/${label}`);
                setValores(resultado.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="campodePrenchimento">
            <div className="select">
                <label>
                    <p>{valorMaiusculo(label)}</p>

                    <select defaultValue="" onChange={handleChange}>

                        <option disabled={true} value="">Escolha</option>
                        {valores.map(item => (
                            <option key={item[`id_${label}`]} value={item[`id_${label}`]}>{item[`nome_${label}`]}</option>
                        ))}
                    </select></label>
            </div>
        </div>
    );
};


export default Dropdown;
