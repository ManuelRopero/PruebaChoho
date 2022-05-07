module.exports = (Sequelize, dataTypes) => {
    let alias = "Estado";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(255)
        }
    }
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,      
    }
    const Estado = Sequelize.define(alias,cols,config);
    Estado.associate = function(models){
        Estado.hasMany(models.Pedido,{
            as: "Pedido",
            foreingkey:"estado_id"
        })
    }
}