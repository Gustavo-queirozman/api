const db = require('../db');

module.exports = {

    buscarTodosProdutos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM estoque', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarProduto: (nome) => {
        return new Promise((aceito, rejeitado)=>{

            db.query("SELECT * FROM estoque WHERE nome LIKE `%${nome}%`", (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ //vai retornar produtos com o valor da variável 'nome'
                    aceito(results);
                }else {
                    console.log("Atenção, não tem nenhum dado")
                    aceito(false);
                }
            });
        });
    },

    buscarCategoria: (categoria) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM estoque WHERE categoria = ?', [categoria], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ //vai verificar se retornou mais de 1 e pegar o 1
                    aceito(results);
                    console.log(results)
                }else {
                    aceito(false);
                }
            });
        });
    },
};
