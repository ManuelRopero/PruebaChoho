
module.exports = (Sequelize, dataTypes) => {
    let alias = "Pedido";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fechaPago: {
            type: dataTypes.DATE
        },
        cantidad: {
            type: dataTypes.BIGINT(10)
        },
        cliente_id: {
            type: dataTypes.BIGINT(10)
        },
        estado_id: {
            type: dataTypes.BIGINT(10)
        }
    }
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,      
    }
    const Pedido = Sequelize.define(alias,cols,config);
    Pedido.associate = function(models){
        Pedido.hasMany(models.Pedido_Producto,{
            as:"Pedido_Producto",
            foreignKey: "pedido_id"
        })
        /*Pedido.belongsTo(models.Cliente,{
            as: "Cliente",
            foreingkey:"cliente_id"
        })*//*
        Pedido.belongsTo(models.Estado,{
            as: "Estado",
            foreingkey:"estado_id"
        })
        */
    }
    return Pedido;
}