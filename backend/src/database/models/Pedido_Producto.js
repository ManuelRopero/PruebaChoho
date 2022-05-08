module.exports = (Sequelize, dataTypes) => {
    let alias = "Pedido_Producto";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pedido_id: {
            type: dataTypes.BIGINT(10)
        },
        producto_id: {
            type: dataTypes.BIGINT(10)
        }
    }
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,        
    }
    const Pedido_Producto = Sequelize.define(alias,cols,config);
    Pedido_Producto.associate = function(models){
        Pedido_Producto.belongsTo(models.Pedido,{
            as: "Pedido",
            foreignKey: "pedido_id"
        })
        Pedido_Producto.belongsTo(models.Producto,{
            as: "Producto",
            foreignKey: "Producto_id"
        })
    }
    return Pedido_Producto;
}