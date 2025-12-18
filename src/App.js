import logo from './logo.svg';
import './App.css';
import '../src/assets/css/fontawesome.css';
import '../src/assets/css/animate.css'
import '../src/assets/css/owl.css';
import '../src/assets/css/flex-slider.css';
import '../src/assets/css/templatemo-tale-seo-agency.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import FAQ from './pages/faq.jsx';
import Contact from './pages/contact.jsx';
import AboutUs from './pages/aboutUs.jsx';
import {Route, Routes } from 'react-router-dom'

function App() {
  return (
  <>
  <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/faq' element={<FAQ/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes> 
  </> 
  );
}

export default App;
