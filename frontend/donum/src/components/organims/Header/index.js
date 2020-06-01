import React from 'react';
import TitleLogo from '../../atoms/TitleLogo';
import { Link } from 'react-router-dom'
import '../../../styles/General/header.css';

const Header = () => (
    <header id="main-header">
        <Link exact to="/" id="test"><TitleLogo title="Home" /></Link>
        <TitleLogo title="Donum"/>
    </header>
);

export default Header;
