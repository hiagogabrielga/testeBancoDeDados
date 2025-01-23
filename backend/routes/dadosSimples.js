import express, { json, query, Router } from 'express'
import { conexao } from "../config.js"
const router = express.Router()

router.get('/cor/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {
        const query = 'SELECT * FROM cor';
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
        const query = 'SELECT * FROM cor WHERE id_cor = ?';
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
});

router.get('/modelo/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {
        const query = 'SELECT * FROM modelo';
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
        const query = 'SELECT * FROM modelo WHERE id_modelo = ?';
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
});

router.get('/combustivel/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {
        const query = 'SELECT * FROM combustivel';
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
        const query = 'SELECT * FROM combustivel WHERE id_combustivel = ?';
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
});

router.get('/aro/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {
        const query = 'SELECT * FROM aro';
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
        const query = 'SELECT * FROM aro WHERE id_aro = ?';
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
});

router.get('/marca/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {
        const query = 'SELECT * FROM marca';
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
        const query = 'SELECT * FROM marca WHERE id_marca = ?';
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
});

router.get('/categoria/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {
        const query = 'SELECT * FROM categoria';
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
        const query = 'SELECT * FROM categoria WHERE id_categoria = ?';
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
});

router.get('/cambio/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {
        const query = 'SELECT * FROM cambio';
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
        const query = 'SELECT * FROM cambio WHERE id_cambio = ?';
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
});

export default router