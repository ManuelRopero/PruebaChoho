module.exports = (Sequelize, dataTypes) => {
    let alias = "Asesor";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigoAsesor: {
            type : dataTypes.STRING(255)
        },
        name:{
            type : dataTypes.STRING(255)
        }
    }
}