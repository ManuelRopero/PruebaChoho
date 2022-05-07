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
}