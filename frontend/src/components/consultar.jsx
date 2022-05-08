import React,{Component} from "react";
import axios from 'axios';
class consultas extends Component {
    state = {
        asesores: []
    }
    componentDidMount(){
        axios.get("http://localhost:3001/api/asesor/allAsesor")
        .then((response) => {
            this.setState({asesores : response.data})
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return(
            <>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Seleccionar Asesor</option>
                    {this.state.asesores.map(element => (
                        <option key={element.id} value={element.id}>{element.name}</option>
                    )
                    )}
                </select>
                <button type="button" className="btn btn-dark">Consultar</button>
            </>
            )
        
    } 
}

export default consultas;