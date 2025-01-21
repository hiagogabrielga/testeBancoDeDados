import express, { query } from 'express'
import { conexao } from './db.js';
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

app.get('/api/mostrarDados', (req, res) => {
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

app.get('/api/enviarDados', (req, res) => {
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

app.get('/api/deletarDados', (req, res) => {
  const tabela = req.query.tabela;
  const valorid = req.query.id;

  // Validação básica para evitar erros
  if (!tabela || !valorid) {
    return res.status(400).json({ error: "Por favor, forneça 'tabela' e 'id'' como parâmetros na URL." });
  }

  // Monta o comando SQL usando placeholders para evitar injeção de SQL
  const insert = 'DELETE from ?? where ?? = ?';
  const colunaId = `id_${tabela}`
  // Usa conexão segura com os placeholders
  conexao.query(insert, [tabela, colunaId, valorid], (err, resultado) => {
    if (err) {
      console.error("Erro ao inserir no banco de dados:", err);
      return res.status(500).json({ error: "Erro ao inserir no banco de dados." });
    }

    res.status(200).json({ message: "Deletação realizada com sucesso!", resultado });
  });
});

app.get('/api/atualizarDados', (req, res) => {
  const tabela = req.query.tabela;
  const valorid = req.query.id;
  const valor = req.query.valor;

  if (!tabela || !valorid || !valor) {
    return res.status(400).json({ error: "Por favor, forneça 'tabela', 'id' e 'valor' como parâmetros na URL." });
  }

  const insert = 'UPDATE ?? set ?? = (?) where ?? = ?';
  const coluna = `nome_${tabela}`
  const colunaId = `id_${tabela}`
  // Usa conexão segura com os placeholders
  conexao.query(insert, [tabela, coluna, valor, colunaId, valorid], (err, resultado) => {
    if (err) {
      console.error("Erro ao inserir no banco de dados:", err);
      return res.status(500).json({ error: "Erro ao inserir no banco de dados." });
    }

    res.status(200).json({ message: "Atualização realizada com sucesso!", resultado });
  });
});

app.listen(8080, () => {
  console.log('Servidor backend rodando na porta 8080');
});