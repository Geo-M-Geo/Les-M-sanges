import { Link } from 'react-router-dom'
import '../Header/Header.scss'
function Header() {
    return (
        <div className="header-container" >
        <h1 className='header-container__title' >L'échauguette</h1>
        <nav className="header-container__nav-bar" >
            <Link className='header-container__nav-bar__link' to="/">Accueil</Link>
            <Link className='header-container__nav-bar__link' to="/">Activités</Link>
        </nav>
        </div>
    )
}
export default Header