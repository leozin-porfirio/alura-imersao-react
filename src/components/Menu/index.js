import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper } from './style.js'; //estilização através de components
import Button from '../Button';

//import './Menu.css';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage src={Logo} alt="PorfirioFlix logo" />
            </Link>

            <Button as={Link} to="/cadastro/video">
                Novo Vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;
