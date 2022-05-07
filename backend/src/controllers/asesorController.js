const asesor = [
    {
        nombre: "Asesor1",
        apellido: "1Asesor"
    },
    {
        nombre: "Asesor2",
        apellido: "Asesor2"
    }
]
const asesorController = {
    getAllasesors: (req,res) => {
        res.json(asesor)
    }
}

module.exports = asesorController;