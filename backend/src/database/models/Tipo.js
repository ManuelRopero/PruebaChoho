module.exports = (Sequelize, dataTypes) => {
    let alias = "Tipo";
    let cols ={
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(255)
        } 
    }
} 