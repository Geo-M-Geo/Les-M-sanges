import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Activites from '../pages/Activites/Activites';
import Equipements from '../pages/Equipements/Equipements';

function PageRoutes(){
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    {/* <Route path='/' element={<Home />} /> */}
                    <Route path='/activites' element={<Activites />} />
                    <Route path='/activites' element={<Activites />} />
                    <Route path='/equipements' element={<Equipements />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default PageRoutes;