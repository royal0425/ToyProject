import React, {Component} from "react";

import ApiComponent from '../api/ApiComponent';

class MainComponent extends Component {    
    
    componentDidMount() {

        ApiComponent.getApi();
    }

    

    render() {
        return(
            <div>
                Main 페이지
            </div>
        )
    }
}

export default MainComponent