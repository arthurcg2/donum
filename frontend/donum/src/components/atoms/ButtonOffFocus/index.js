import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import '../../../styles/stylePrincipal.css';

const ButtonOffFocus = props => props.onClick ? (
  <button id="btn-offFocus" onClick={() => props.onClick()}>{props.title}</button>
) : 
(
  <Link to="/Login" id="btn-offFocus">{props.title}</Link>
)

export default ButtonOffFocus;
    


