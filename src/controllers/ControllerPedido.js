const Service = require('../services/ServicePedido');

module.exports = {

    inserirPedido: async(req, res) => {
        let json = {error:'', result:{}};

      console.log(req);
        
        let comprador = req.body.comprador;
        let email = req.body.email;
        let compra = req.body.compra;
        let endereco = req.body.endereco;

        if (comprador && email && compra && endereco){
            let idUsuario = await Service.inserirPedido(comprador, email, compra, endereco);
            json.result = {
                comprador,
                email,
                id: idUsuario,
                compra,
                endereco
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    }
}


