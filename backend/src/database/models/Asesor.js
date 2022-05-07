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
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,      
    }
    const Asesor = Sequelize.define(alias,cols,config);
    Asesor.associate = function(modesl){
        Asesor.hasMany(models.Cliente,{
            as: "Cliente",
            foreignKey: "asesor_id"
        })
    }
    return Asesor;
}