import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import '../../../styles/stylePrincipal.css';

export default class ButtonStandart extends Component {
    render(){
        return(
            <BrowserRouter>
                <Link exact to="/" id="btn-standart">{this.props.title}</Link>
            </BrowserRouter>
        )
    }
}
    

