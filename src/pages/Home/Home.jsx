import Carousel from '../../components/Carousel/Carousel'
import {photos} from '../../datas/data.js'

function Home() {
    // const data = photos.photos.map((saison, cover, index) => {
    //     return <li key={index}>{saison}{cover}</li>
    
    return (

        <div>
            <Carousel picture={photos.cover} saison={photos.saison} />
        </div>
    )
}
export default Home