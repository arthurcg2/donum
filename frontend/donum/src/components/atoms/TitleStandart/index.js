import React, { Component } from 'react'
import '../../../styles/stylePrincipal.css';

export default class TitleStandart extends Component{
    render(){
        return(
        <h1 id="container-title-standart"> {this.props.title} </h1>
        )
    }
}
