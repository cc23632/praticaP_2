const bd = require("../../config/database")
const hotelDAO = require("../BD/DAO_hotel")

class CON_hotel {

    //listagens

    exibequarto() {
        return function(req,res) {
            const hDAO = new hotelDAO(bd);
            hDAO.exibequartos() 
              .then((resultados) => {
                 console.log(resultados);
                 res.render('../views/quarto', { quarto: Array.isArray(resultados.recordset) ? resultados.recordset : [resultados.recordset] });
              })
              .catch(erro => console.log(erro));
        }
    }

    exibeestacionamento() {
        return function(req,res) {
            const hDAO = new hotelDAO(bd);
            hDAO.exibeesta() 
              .then((resultados) => {
                 console.log(resultados);
                 res.render('../views/estacionamento', { esta: Array.isArray(resultados.recordset) ? resultados.recordset : [resultados.recordset] });
              })
              .catch(erro => console.log(erro));
        }
    }

    exibehospede() {
        return function(req,res) {
            const hDAO = new hotelDAO(bd);
            hDAO.exibehospede() 
              .then((resultados) => {
                 console.log(resultados);
                 res.render('../views/hospede', { hospede: Array.isArray(resultados.recordset) ? resultados.recordset : [resultados.recordset] });
              })
              .catch(erro => console.log(erro));
        }
    }

    exibereserva() {
        return function(req,res) {
            const hDAO = new hotelDAO(bd);
            hDAO.exibereserva() 
              .then((resultados) => {
                 console.log(resultados);
                 res.render('../views/reserva', { reserva: Array.isArray(resultados.recordset) ? resultados.recordset : [resultados.recordset] });
              })
              .catch(erro => console.log(erro));
        }
    }

    exibetipo() {
        return function(req,res) {
            const hDAO = new hotelDAO(bd);
            hDAO.exibetipo() 
              .then((resultados) => {
                 console.log(resultados);
                 res.render('../views/tipoquarto', { tipo: Array.isArray(resultados.recordset) ? resultados.recordset : [resultados.recordset] });
              })
              .catch(erro => console.log(erro));
        }
    }

    //deletes

    deletaesta() {
        return function(req,res) {
            const hDAO = new hotelDAO(bd);
            let id = req.params.id_Vaga
            hDAO.excluicarro(id) 
              .then((resultados) => {
                 console.log(resultados);
              })
              .catch(erro => console.log(erro));
        }
    }

    deletahospede() {
        return function(req,res) {
            const hDAO = new hotelDAO(bd);
            let id = req.params.codigoCliente
            hDAO.excluihospede(id) 
              .then((resultados) => {
                 console.log(resultados);

              })
              .catch(erro => console.log(erro));
        }
    }

    deletaquarto() {
        return function(req,res) {
            const hDAO = new hotelDAO(bd);
            let id = req.params.numeroQuarto
            hDAO.excluiquarto(id) 
              .then((resultados) => {
                 console.log(resultados);

              })
              .catch(erro => console.log(erro));
        }
    }

    deletareserva() {
        return function(req,res) {
            const hDAO = new hotelDAO(bd);
            let id = req.params.id_Reserva
            hDAO.excluireserva(id) 
              .then((resultados) => {
                 console.log(resultados);

              })
              .catch(erro => console.log(erro));
        }
    }

    deletatipo() {
        return function(req,res) {
            const hDAO = new hotelDAO(bd);
            let id = req.params.id_Tipo
            hDAO.excluitipo(id) 
              .then((resultados) => {
                 console.log(resultados);

              })
              .catch(erro => console.log(erro));
        }
    }
}

module.exports = CON_hotel