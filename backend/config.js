import mysql from 'mysql'

export const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'hiago',
    password: '12345',
    database: 'web-cars'
});
