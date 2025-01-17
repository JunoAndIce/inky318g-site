
// import ekLogo from '../assets/images/New-EK-Logo.png'
import ekLogo from '../assets/images/logo.png'


const Navbar = () => {

  return (
    <section data-scroll-sticky className='navbar_main'>

      <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img className="navbar_img" src={ekLogo} alt="Logo" />
            </a>
          </div>
        </div>
      </nav>
    </section>
  );

}

export default Navbar; 