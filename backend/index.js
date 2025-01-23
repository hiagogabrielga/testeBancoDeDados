import express, { json, query } from 'express'
import { conexao } from './config.js';
import router from './routes/dadosSimples.js'
import routerEnviarCarro from './routes/adicionarAnuncio.js';
import routerMostraCarro from './routes/apresentarAnuncios.js'


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


app.use('/api', router);

app.use('/api/adicionarVeiculo', routerEnviarCarro)

app.use('/api/mostrar', routerMostraCarro)

app.listen(8080, () => {
  console.log('Servidor backend rodando na porta 8080');
});

