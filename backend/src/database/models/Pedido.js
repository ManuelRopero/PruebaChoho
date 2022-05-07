
module.exports = (Sequelize, dataTypes) => {
    let alias = "Pedido";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fechaPago: {
            type: dataTypes.DATETIME
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
}