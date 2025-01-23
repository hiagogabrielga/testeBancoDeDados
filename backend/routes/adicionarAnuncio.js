import express, { json, query, Router } from 'express'
import { conexao } from "../config.js"
import adicionarVeiculo from '../servicos/adicionarCarro.js'
const routerEnviarCarro = express.Router()

routerEnviarCarro.post('/adicionarCarro', (req, res) => {
    const nomeAnuncio = req.query.nomeAnuncio;
    const anoCarro = req.query.anoCarro;
    const condicaoCarro = req.query.condicaoCarro;
    const valorCarro = req.query.valorCarro;
    const ipvaPago = req.query.ipvaPago;
    const dataIpva = req.query.dataIpva;
    const dataCompra = req.query.dataCompra;
    const detalhesVeiculo = req.query.detalhesVeiculo;
    const blindagem = req.query.blindagem;
    const idCor = req.query.idCor;
    const idAro = req.query.idAro;
    const idCategoria = req.query.idCategoria;
    const idMarca = req.query.idMarca;
    const idModelo = req.query.idModelo;
    const idCombustivel = req.query.idCombustivel;
    const idCambio = req.query.idCambio;
    const idConcessionaria = req.query.idConcessionaria;
    const nomeImagens = req.query.nomeImagens;
    var mensagem;
    mensagem = adicionarVeiculo(nomeAnuncio, anoCarro, condicaoCarro, valorCarro, ipvaPago, dataIpva,
        dataCompra, detalhesVeiculo, blindagem, idCor, idAro, idCategoria,
        idMarca, idModelo, idCombustivel, idCambio, idConcessionaria, nomeImagens)
    res.json(mensagem)
})
export default routerEnviarCarro