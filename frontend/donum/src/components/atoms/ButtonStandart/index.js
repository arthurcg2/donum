import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/stylePrincipal.css';

const ButtonStandart = props => props.onClick ? (
  <button id="btn-standart" onClick={() => props.onClick()}>{props.title}</button>
)
:
(
  <Link exact to="/Register" id="btn-standart">{props.title}</Link>
)

export default ButtonStandart;
    

