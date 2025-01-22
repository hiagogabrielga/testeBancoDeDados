import express, { json, query } from 'express'
import { conexao } from './db.js';
import adicionarVeiculo from './rotes/adicionarCarro.js';
const app = express();

conexao.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados Mysql:', err);
    return;
  }
  console.log('Conexão estabelecida com o banco de dados Mysql');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
  next();
});

app.get('/api/mostrarDadosTabelas', (req, res) => {
  const tabela = req.query.tabela;
  const query = 'SELECT * FROM ??';
  conexao.query(query, [tabela], (err, resultado) => {
    if (err) {
      console.error('Erro ao executar a query:', err);
      res.status(500).json({ error: 'Erro ao buscar dados.' });
      return;
    }
    res.json(resultado);
  });
});

app.post('/api/enviarDados', (req, res) => {
  const tabela = req.query.tabela;
  const nome = req.query.nome;

  // Validação básica para evitar erros
  if (!tabela || !nome) {
    return res.status(400).json({ error: "Por favor, forneça 'tabela' e 'nome' como parâmetros na URL." });
  }

  // Monta o comando SQL usando placeholders para evitar injeção de SQL
  const insert = 'INSERT INTO ?? (??) VALUE (?)';
  const coluna = `nome_${tabela}`
  // Usa conexão segura com os placeholders
  conexao.query(insert, [tabela, coluna, nome], (err, resultado) => {
    if (err) {
      console.error("Erro ao inserir no banco de dados:", err);
      return res.status(500).json({ error: "Erro ao inserir no banco de dados." });
    }

    res.status(200).json({ message: "Inserção realizada com sucesso!", resultado });
  });
});



app.get('/api/adicionarVeiculo', (req, res) => {
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
app.listen(8080, () => {
  console.log('Servidor backend rodando na porta 8080');
});

