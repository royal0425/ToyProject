import {Component} from "react";
import axios from "axios";
class ApiComponent extends Component {    

    constructor(props) {
        super(props)
        this.state = {
            message: ""
        }
    }

    getApi = () => {
        axios.get("http://localhost:8080/api")
            .then(res => {
                console.log(res);
                
                this.setState({
                    message: res.data.message
                })
            })
            .catch(res => console.log(res))
    }
}

export default ApiComponent