const Service = require('../services/ServiceProduto');

module.exports = {
    
    buscarTodosProdutos: async (req, res) => {
        let json = {result:[]};

        let produto = await Service.buscarTodosProdutos();

        for(let i in produto){
            json.result.push({
                id: produto[i].id,
                nome: produto[i].nome,
                preco: produto[i].preco,
                validade: produto[i].validade,
                foto: produto[i].foto,
                categoria: produto[i].categoria,
                quantidade: produto[i].quantidade,
                lucro_unitario: produto[i].lucro_unitario
            });
        }

        res.json(json);
    },

    buscarProduto: async (req, res) => {
        let json = {result:{}};

        let nome = req.query.nome; //para pegar o parametro
        let produto = await Service.buscarProduto(nome);

        if(produto){
            json.result = produto; //se produto ele joga no json
        }

        res.json(json);
    },

    buscarCategoria: async (req, res) => {
        let json = {result:{}};

        let categoria = req.query.categoria; //para pegar o parametro
        let produto = await Service.buscarCategoria(categoria);

        if(produto){
            json.result = produto; //se produto ele joga no json
        }

        res.json(json);
    },
}
