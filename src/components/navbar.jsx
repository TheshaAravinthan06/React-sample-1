import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom'
function Navbar() {
    return(
<>
          {/* ***** Pre-Header Area Start ***** */}
  <div className="pre-header" id="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-9">
          <div className="left-info">
            <ul>
              <li><a href="#"><i className="fa fa-phone"></i>+000 1234 5678</a></li>
              <li><a href="#"><i className="fa fa-envelope"></i>infocompany@email.com</a></li>
              <li><a href="#"><i className="fa fa-map-marker"></i>St. London 54th Bull</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-sm-3">
          <div className="social-icons">
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ***** Pre-Header Area End ***** */}
  
          {/* ***** Header Area Start ***** */}
  <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    {/* ***** Logo Start ***** */}
                    <a href="index.html" className="logo">
                        <img src={logo} alt="" style={{maxWidth: '112px'}} />
                    </a>
                    {/* ***** Logo End ***** */}
                    {/* ***** Menu Start ***** */}
                      <ul className="nav">
                        <li><a href="index.html"><Link to="/">Home</Link></a></li>
                        <li><a href="faq.html"><Link to="/faq">FAQs</Link></a></li>
                        <li><a href="about.html"><Link to="/about">About Us</Link></a></li>
                        <li><a href="contact.html"><Link to="/contact">Contact</Link></a></li>
                    </ul> 
                 
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    {/* ***** Menu End ***** */}
                </nav>
            </div>
        </div>
    </div>
  </header>
  {/* ***** Header Area End ***** */}
    </>

)
}

export default Navbar;