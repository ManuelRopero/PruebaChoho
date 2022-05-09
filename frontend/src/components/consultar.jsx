import React,{Component} from "react";
import axios from 'axios';
import { element } from "prop-types";
class consultas extends Component {
    state = {
        asesores: [],
        detailAsesor: [],
        idAsesor : null
    }
    componentDidMount(){
        axios.get("http://localhost:3001/api/asesor/allAsesor")
        .then((response) => {
            this.setState({asesores : response.data});
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
        //this.traerAsesorInfo();
    }
    traerAsesorInfo (id) {
        console.log("Entre a asesor info",id);
        //axios.get(`http://localhost:3001/api/asesor/${id}`)
        fetch(`http://localhost:3001/api/asesor/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log("Salida",data);
            this.setState({detailAsesor : data})
        })
        .catch((error) => {
            console.log("ERROR traerAsesorInfo"+error);
        });
    }
    
    render() {
        let contendio = "";
        if(this.state.detailAsesor == "") {
            contendio = <p> No se ha buscado nada</p>
        } else{
            contendio = <text>
                            <div className="container">
                            <div className="text-center">
                                    <h2>Informacion Asesores</h2>
                                </div>
                            <table border="1" className="table">
                                    <thead> 
                                        <tr>
                                            <th>Nombre asesor :</th>
                                            <th>{this.state.detailAsesor.name}</th>
                                        </tr>
                                        <tr>
                                            <th>id asesor :</th>
                                            <th>{this.state.detailAsesor.id} </th>
                                        </tr>
                                        <tr>
                                            <th>codigo asesor :</th>
                                            <th>{this.state.detailAsesor.codigoAsesor}</th>
                                        </tr>
                                        <tr>
                                            <th>Clientes asignados :</th>
                                            <th>{this.state.detailAsesor.clientesAsignados}</th>
                                        </tr>
                                        <tr>
                                            <th>Total Pedidos :</th>
                                            <th>{this.state.detailAsesor.totalPeidos}</th>
                                        </tr>
                            
                                    </thead>
                                </table>
                                <div className="text-center">
                                    <h2>Usuarios asignados</h2>
                                </div>
                                <table border="1" className="table">
                                    <thead> 
                                    <tr>
                                        <th>id</th>
                                        <th>Nombre Usuario</th>
                                        <th>Cantidad de productos</th>
                                        <th>Productos comprados</th>
                                    </tr>
                                        {
                                            this.state.detailAsesor.clientes.map(element => (
                                                <tr>
                                                    <th>{element.idCliente}</th>
                                                    <th>{element.name}</th>
                                                    <th>{element.totalPedidos}</th>
                                                    <table border="1" className="table">
                                                    <tr>
                                                        <th>Producto</th>
                                                        <th>Precio</th>
                                                        <th>Cantidad</th>
                                                        <th>total</th>
                                                    </tr>
                                                    {
                                                        element.detallePedido.map(element => (
                                                            
                                                                element.productos.map(element => (
                                                                    <tr>
                                                                            
                                                                            <th>{element.detailProductos.nameProduct}</th>
                                                                            <th>  ${element.detailProductos.valorUnitario}</th>
                                                                            <th>{element.detailProductos.cantidad}</th>
                                                                            <th>{element.detailProductos.total}</th>
                                                                    </tr>
                                                                        ))
                                                            ))
                                                            
                                                    }
                                                    </table>

                                                </tr>
                                            ))
                                        }
                                    </thead>
                                </table>
                            </div>

                        </text>
        }
        return(
            <>

                    <div className="container">
                    <div className="text-center">
                        <h2>Asesores</h2>
                    </div>
                        <table border="1" className="table">
                            <thead>
                                {
                                    this.state.asesores.map(element => (
                                        <tr>
                                            <th>{element.name}</th>
                                            <th><button type="button" className="btn btn-dark" onClick={()=> this.traerAsesorInfo(element.id) }>Consultar</button></th>
                                        </tr>
                                    ))
                                }
                            </thead>
                        </table>
                    </div>
                {contendio}
            </>
            )
        
    } 
}

export default consultas;