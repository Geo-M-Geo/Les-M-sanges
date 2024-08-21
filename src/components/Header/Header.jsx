import { Link } from 'react-router-dom'
import '../Header/Header.scss'
import feather from '../../assets/plume3.png'
import { useState } from 'react'
import down from "../../assets/chevron-down.png";
import up from "../../assets/chevron-up.png";



function Header() {
const [open, setOpen] = useState(false);

const handleOpen = () => {
    setOpen(!open);
};

    return (
    <div className='header'>
        <Link className='header__logo-title' to="/">
            <img className='header__logo-title__logo' alt='Feather logo of the website' src={feather}/>
            <h1 className='header__logo-title__title'  >Les Mésanges</h1>
        </Link>
        <div className='header__menu__normal'>
                <Link className='header__menu__normal__link' to="/">Accueil</Link>
                <Link className='header__menu__normal__link' to="/equipements">Equipements</Link>
                <Link className='header__menu__normal__link' to="/loisirs">Loisirs</Link>
        </div>
        <div className="header__menu__small-screen">
            <button onClick={handleOpen} className='header__menu__small-screen__button'>
            {open ? (
                <div className='header__menu__small-screen__opening' >
                    <img className='header__menu__small-screen__opening__logo' src={up} alt='arrow up'/>
                    <div className='header__menu__small-screen__opening__links'>
                        <Link className='header__menu__small-screen__opening__links__link' to="/">Accueil</Link>
                        <Link className='header__menu__small-screen__opening__links__link' to="/equipements">Equipements</Link>
                        <Link className='header__menu__small-screen__opening__links__link' to="/loisirs">Loisirs</Link>
                    </div>
                </div>
            ) : <img className='header__menu__small-screen__button__logo' src={down} alt='arrow up'/> }
            </button>
        </div>
    </div>
    );
};

    export default Header;


// https://stackoverflow.com/questions/62835987/react-rotate-chevron-on-click