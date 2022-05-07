const db = require('../database/models');
const sequelize = db.sequelize;
const asesor = db.Asesor;
const cliente = db.Cliente;
const products = db.Producto;
const pedidos = db.Pedido;
const asesorController = {
    getAllasesors: async (req,res) => {
        const allAsesor = await asesor.findAll();
        res.json(allAsesor);
    },
    getAllusers: async (req,res) => {
        const allusers = await cliente.findAll();
        res.json(allusers);
    },
    getAllproducts: async (req,res) => {
        const allproducts = await products.findAll();
        res.json(allproducts);
    },
    getAllPedidos: async (req,res) => {
        const allPedidos = await pedidos.findAll();
        res.json(allPedidos);
    }
}

module.exports = asesorController;