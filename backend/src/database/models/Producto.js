module.exports = (Sequelize, dataTypes) => {
    let alias = "Producto";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        },
        valorUnitario: {
            type: dataTypes.BIGINT(10)
        },
        tipo_id: {
            type: dataTypes.BIGINT(10)
        }
    }
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,        
    }
    const Producto = Sequelize.define(alias,cols,config);
    Producto.associate = function(models){
        Producto.hasMany(models.Pedido_Producto,{
            as: "Pedido_Producto",
            foreignKey: "Producto_id"
        })
        Producto.belongsTo(models.Tipo,{
            as: "Tipo",
            foreignKey: "tipo_id"
        })
    }
    return Producto;
}