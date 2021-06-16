
const db = require('../db');

module.exports = {
    inserirPedido: (comprador, email, compra, endereco)=> {
        return new Promise((aceito, rejeitado)=> {
    
            db.query('INSERT INTO pedidos (comprador, email, compra, endereco) VALUES (?, ?, ?, ?)',
                [comprador, email, compra, endereco],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertid); //insertId
                }
            );
        });
    }
}
