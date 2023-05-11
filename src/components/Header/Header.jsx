import { Link } from 'react-router-dom'
import '../Header/Header.scss'
import Menu from '../Menu/Menu'
import feather from '../../assets/plume3.png'
import { useState } from 'react'
import dropdown from "../../assets/icon-menu.png";

function Header() {
    return (
        <div className='header'>
                <Link className='header__logo-title' to="/">
                    <img className='header__logo-title__logo' alt='Feather logo of the website' src={feather}/>
                    <h1 className='header__logo-title__title'  >Les Mésanges</h1>
                </Link>
            <div className='header__menu'>
                    <img className='header__menu__dropdown-logo' src={dropdown}></img>
                <div className='header__menu__navbar'>
                    <Link className='header__menu__navbar__link' to="/">Accueil</Link>
                    <Link className='header__menu__navbar__link' to="/equipements">Equipements</Link>
                </div>
            </div>
        </div>
    )
}
export default Header