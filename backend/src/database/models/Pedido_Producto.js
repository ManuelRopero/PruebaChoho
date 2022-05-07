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
        Producto_id: {
            type: dataTypes.BIGINT(10)
        }
    }
}