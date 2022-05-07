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
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,        
    }
    const Tipo = Sequelize.define(alias,cols,config);
    Tipo.associate = function(models){
        Tipo.hasMany(models.Producto,{
            as: "Producto",
            foreignKey: "tipo_id"
        })
    }
} 