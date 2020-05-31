import React, { Component } from 'react'
import '../../../styles/stylePrincipal.css';

export default class TxtStandart extends Component{
    render(){
        return(
            <p id="txt-standart">{this.props.title}</p>
        )
    }
}
    
