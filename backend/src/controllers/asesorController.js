const db = require('../database/models');
const sequelize = db.sequelize;
const asesor = db.Asesor;
const cliente = db.Cliente;
const products = db.Producto;
const pedidos = db.Pedido;
const pedidoProducto = db.Pedido_Producto;
const asesorController = {
    getAllasesors: async (req,res) => {
        const allAsesor = await asesor.findAll();
        res.json(allAsesor);
    },
    getAllusers: async function ()  {
        const allusers = await cliente.findAll();
        return allusers;
    },
    getUsersAsign: async (AsesorId) => {
        const allusers = await asesorController.getAllusers();
        let cont = 0;
        for (let i = 0; i < allusers.length; i++) {
            if ( allusers[i].asesor_id == AsesorId ) {
                cont = cont+1;
            }
        }
        return cont;
    },
    getUsuariosAsesor: async (AsesorId) => {
        const allUsers = await asesorController.getAllusers();
        const usuariosDeAsesor = [];
        for (let i = 0; i < allUsers.length; i++) {
            if ( allUsers[i].asesor_id == AsesorId ) {
                usuariosDeAsesor.push(allUsers[i].id);
            }
        }
        return usuariosDeAsesor;
    },
    getPedidosPorAsesor : async (AsesorId) => {
        const usuariosDeAsesor = await asesorController.getUsuariosAsesor(AsesorId);
        const allPedidos = await pedidos.findAll();
        let cont = 0;
        for (let i = 0; i <= usuariosDeAsesor.length; i++) {
            
            for (let j = 0; j< allPedidos.length; j++){
                if (allPedidos[j].cliente_id == i) { //Si cliente_id en pedidos  corresponde al id del cliente entonces el pedido es del usuario 
                    cont = cont+1;
                }
            }
        }
        return cont;

    },
    getPedidosUsuarios : async (userId) => {
        const allPedidos = await pedidos.findAll();
        let cont = 0;
        for (let i = 0; i < allPedidos.length; i++) {
            if (allPedidos[i].cliente_id == userId) {
                cont = cont+1;
            };
            
        }
        return cont;
    },
    getDetailProducto : async (pedidoId,userId) => {
        const pedidosProductos = await pedidoProducto.findAll();
        //const allProducts = await products.findAll();
        let productoId = 0;
        for (let i = 0; i < pedidosProductos.length; i++) {
            if (pedidosProductos[i].pedido_id == pedidoId) {
                productoId = pedidosProductos[i].producto_id;
            }
        }
        const pedido = await pedidos.findByPk(pedidoId);
        const producInfo = await products.findByPk(productoId);
        const proudctJson = {
            idProduct : producInfo.id,
            nameProduct : producInfo.name,
            tipoProduct : producInfo.tipo_id,
            valorUnitario : producInfo.valorUnitario,
            cantidad : pedido.cantidad,
            total : producInfo.valorUnitario*pedido.cantidad
        }
        return proudctJson;

    },
    getDetailPedido : async (userId) => {
        const pedidoDetail = await pedidos.findAll();
        const pedidoInfo = [];
        let estado = "";
        for (let i = 0; i < pedidoDetail.length; i++) {
            if(pedidoDetail[i].cliente_id == userId){
                if (pedidoDetail[i].estado_id == 1) {
                    estado = "Pagado"
                }else {
                    estado = "Sin pagar"
                }
                const detailProductos = await asesorController.getDetailProducto(pedidoDetail[i].id,pedidoDetail[i].cliente_id);
                pedidoInfo.push({
                    idPedido : pedidoDetail[i].id,
                    fechaPago : pedidoDetail[i].fechaPago,
                    estado : estado,
                    
                    productos : 
                    [
                        {
                            detailProductos,
                        }
                    ] 

                })
            }   
            
        }
        return pedidoInfo;

    },
    getUserDetail : async (AsesorId) => {
        const idUsers = await asesorController.getUsuariosAsesor(AsesorId);
        const allusers = await asesorController.getAllusers();
        const clients = [];
        for (let i = 0 ; i <= idUsers.length ; i++) {
            for(let j =0 ; j< allusers.length ; j++){
                if(allusers[j].id == idUsers[i]){
                    const totalPedios = await asesorController.getPedidosUsuarios(idUsers[i]);
                    const detailPedido = await asesorController.getDetailPedido(idUsers[i]);
                    clients.push({
                        idCliente : allusers[j].id,
                        name : allusers[j].name,
                        totalPedidos: totalPedios,
                        detallePedido: detailPedido
                    })
                }
            }
        }
        return clients;
    },
    getAllproducts: async (req,res) => {
        const allproducts = await products.findAll();
        res.json(allproducts);
    },
    getAllPedidos: async (req,res) => {
        const allPedidos = await pedidos.findAll();
        res.json(allPedidos);
    },
    getAsesorsId: async (req,res) => {
        const id = req.params.id;
        const Asesor = await asesor.findByPk(id);
        const totalUsersAsing = await asesorController.getUsersAsign(id);
        const totalPedidos = await asesorController.getPedidosPorAsesor(id);
        const clients = await asesorController.getUserDetail(id);
        console.log(clients);
        const AsesorJson = {
            id : Asesor.id,
            name : Asesor.name,
            codigoAsesor : Asesor.codigoAsesor,
            clientesAsignados : totalUsersAsing,
            totalPeidos : totalPedidos,
            clientes : clients
        } 
        res.json(AsesorJson);
    }
}

module.exports = asesorController;