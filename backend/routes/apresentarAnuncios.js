import express from 'express'
import { conexao } from "../config.js"
const routerMostraCarro = express.Router()

routerMostraCarro.get('/anuncioCarro/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {
        const query = 'SELECT * FROM anuncioCarro';
        conexao.query(query, (err, resultado) => {
            if (err) {
                console.error('Erro ao executar a query:', err);
                res.status(500).json({ error: 'Erro ao buscar dados.' });
                return;
            }
            res.json(resultado);
        });
    } else {
        if (isNaN(id)) {
            res.status(400).json({ error: 'ID inválido. Deve ser um número.' });
            return;
        }
        const query = 'SELECT * FROM anuncioCarro WHERE id_anuncioCarro = ?';
        conexao.query(query, [id], (err, resultado) => {
            if (err) {
                console.error('Erro ao executar a query:', err);
                res.status(500).json({ error: 'Erro ao buscar dados.' });
                return;
            }
            if (resultado.length === 0) {
                res.status(404).json({ error: 'Registro não encontrado.' });
                return;
            }
            res.json(resultado[0]);
        });
    }
})

export default routerMostraCarro