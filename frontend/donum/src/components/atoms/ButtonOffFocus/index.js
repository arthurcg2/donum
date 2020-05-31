import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import '../../../styles/stylePrincipal.css';

export default class ButtonOffFocus extends Component{
    render(){
        return(
            <BrowserRouter>
                <Link exact to="/" id="btn-offFocus">Login</Link>
            </BrowserRouter>
        )
    }
}
    


