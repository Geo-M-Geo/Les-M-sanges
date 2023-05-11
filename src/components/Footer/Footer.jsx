// import { Link } from 'react-router-dom'
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'
import facebook from '../../assets/facebook.png'
import '../Footer/Footer.scss'
function Footer() {

    return(
        <div className='footer-container'>
            <div className='footer-container__logo'>
                <img className='footer-container__logo__facebook' src={facebook}/>
                <img className='footer-container__logo__instagram' src={instagram}/>
                <img className='footer-container__logo__whatsapp' src={whatsapp}/>
            </div>
        </div>
    )
}
export default Footer