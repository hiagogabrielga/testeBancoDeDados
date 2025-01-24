import express, { json, query } from 'express'
import { conexao } from './config.js';
import routerSimples from './routes/mostrarSimples.js'
import routerAdicionar from './routes/adicionar.js';
import routerMostrarDetalhes from './routes/mostrarDetalhes.js'


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


app.use('/api', routerSimples);

app.use('/api/adicionar', routerAdicionar)

app.use('/api/mostrar', routerMostrarDetalhes)


app.listen(8080, () => {
  console.log('Servidor backend rodando na porta 8080');
});

