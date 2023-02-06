import  bannerImage  from '../../assets/Banner-view.jpg'
import '../Banner/Banner.scss'

function Banner() {
    return (
        <div className="banner-container">
            <img className='banner-container__image' src={bannerImage} alt='Image de la bannier du site'/>
            <h1 className='banner-container__title' >L'échauguette</h1>
        </div>
    )
}

export default Banner