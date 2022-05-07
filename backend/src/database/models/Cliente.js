module.exports = (Sequelize, dataTypes) => {
    let alias = "Cliente";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        },
        asesor_id: {
            type: dataTypes.BIGINT(10)
        }
    }
}