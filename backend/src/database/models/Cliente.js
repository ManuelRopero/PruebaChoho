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
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,        
    }
    const Cliente = Sequelize.define(alias,cols,config);

    Cliente.associate = function(models){
        /*Cliente.belongsTo(models.Asesor,{
            as: "Asesor",
            foreingkey:"asesor_id"
        })*//*
        Cliente.hasMany(models.Pedido,{
            as: "Pedido",
            foreingkey:"cliente_id"
        })*/
    }
    return Cliente;
}