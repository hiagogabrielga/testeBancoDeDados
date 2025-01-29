import mysql from 'mysql'
export const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'web-cars'
});

/*export const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Suporte99',
    database: 'web-cars'
});*/
