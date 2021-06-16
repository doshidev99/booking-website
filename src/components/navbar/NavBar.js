import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.scss';


const NavBar = () => {
  const [isShow, setIsShow] = useState(false)

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    this.props.history.push('/');
  }
  
  return (
    <div className="navbar">
      <div className="navbar-bg" />
      <nav className="navbar navbar-expand-lg main-navbar" style={{ display: "flex", justifyContent: "space-between" }}>
        <form className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li><Link to="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search" /></Link></li>
          </ul>
          <div className="search-element" style={{ display: "flex" }}>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250" />
            <button className="btn" type="submit"><i className="fas fa-search" /></button>
            <div className="search-backdrop" />
            <div className="search-result">
              <div className="search-header">
                Histories
              </div>
              <div className="search-item">
                <Link to="#">How to hack NASA using CSS</Link>
                <Link to="#" className="search-close"><i className="fas fa-times" /></Link>
              </div>
              <div className="search-item">
                <Link to="#">Kodinger.com</Link>
                <Link to="#" className="search-close"><i className="fas fa-times" /></Link>
              </div>
              <div className="search-item">
                <Link to="#">#Stisla</Link>
                <Link to="#" className="search-close"><i className="fas fa-times" /></Link>
              </div>
              <div className="search-header">
                Result
              </div>
              <div className="search-item">
                <Link to="#">
                  <img className="mr-3 rounded" width="30" src="../assets/img/products/product-3-50.png" alt="product" />
                </Link>
              </div>
              <div className="search-item">
                <Link to="#">
                  <img className="mr-3 rounded" width="30" src="../assets/img/products/product-2-50.png" alt="product" />
                  Drone X2 New Gen-7
                </Link>
              </div>
              <div className="search-item">
                <Link to="#">
                  <img className="mr-3 rounded" width="30" src="../assets/img/products/product-1-50.png" alt="product" />
                  Headphone Blitz
                </Link>
              </div>
              <div className="search-header">
                Projects
              </div>
              <div className="search-item">
                <Link to="#">
                  <div className="search-icon bg-danger text-white mr-3">
                    <i className="fas fa-code" />
                  </div>
                  Stisla Admin Template
                </Link>
              </div>
              <div className="search-item">
                <Link to="#">
                  <div className="search-icon bg-primary text-white mr-3">
                    <i className="fas fa-laptop" />
                  </div>
                  Create a new Homepage Design
                </Link>
              </div>
            </div>
          </div>
        </form>
        <ul className="navbar-nav navbar-right">
          <li className="dropdown dropdown-list-toggle">
            <Link to="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle beep"><i className="far fa-envelope" /></Link>
            <div className="dropdown-menu dropdown-list dropdown-menu-right" >
            </div>
          </li>
          <li className="dropdown dropdown-list-toggle">
            <Link to="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell" /></Link>
            <div className="dropdown-menu dropdown-list dropdown-menu-right">
            </div>
          </li>
          <li
            className="dropdown"
            onClick={() => setIsShow((cS) => !cS)}
          >
            <Link to="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
              <img alt="image1" src="../../../../img/121241321_670001800616075_329923169218267049_o.jpg" className="rounded-circle mr-1" />
              <div className="d-sm-none d-lg-inline-block">
                Hi,
                {/* {this.props.userIsLogging.dataUserLogin.user.userName} */}
              </div>
            </Link>
            <div className={`dropdown-menu dropdown-menu-right 
            ${isShow ? 'd-block active' : 'none'}`} style={{ right: "0", top: "40px" }}>
              <div className="dropdown-title">Logged in 5 min ago</div>
              <Link to="features-profile.html" className="dropdown-item has-icon">
                <i className="far fa-user" />
                Profile
              </Link>
              <Link to="features-activities.html" className="dropdown-item has-icon">
                <i className="fas fa-bolt" />
                {' '}
                Activities
              </Link>
              <Link to="features-settings.html" className="dropdown-item has-icon">
                <i className="fas fa-cog" />
                {' '}
                Settings
              </Link>
              <div className="dropdown-divider" />
              <div onClick={handleLogout} className="dropdown-item has-icon text-danger cursor-pointer">
                <i className="fas fa-sign-out-alt" />
                Logout
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
