import React, {Component} from 'react';
import Link from "next/link";
import Search from "./Search";

class Header extends Component {
    render() {
        function menuActive(){
            document.querySelector('.navbar-main-links').classList.toggle('navbar-active');
            document.querySelector('.layer').classList.toggle('layer-active');
            document.querySelector('.aside-bars-btn i').classList.toggle('active');

        }
        return (
            <div className='header-section shadow-sm fixed-top'>
               <div className='container-main'>
                   <div className='navbar-main'>
                       <span className='navbar-main-logo'>
                           <img src={`/Images/bazaar-logo1.jpg`}></img>
                       </span>
                       <span className='navbar-main-links'>


                               <span className="dropdown">
  <a className="btn navbar-link-cs" href="#" role="button" id="dropdownMenuLink"
     data-bs-toggle="dropdown" aria-expanded="false">
    برنامه ها
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</span>
                               <span className="dropdown">
  <a className="btn navbar-link-cs" href="#" role="button" id="dropdownMenuLink"
     data-bs-toggle="dropdown" aria-expanded="false">
    بازی ها
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</span>

                                  <span>
                                      <a className='navbar-link-cs'>پنل توسعه دهندگان</a>
                                  </span>


                                  <span>
                                    <a className={'navbar-link-cs'}>پشتیبانی</a>
                                  </span>
                       </span>
                       <span className='navbar-main-aside'>

                             <Search></Search>


                           <span>
                                 <a className="aside-user-btn" href='#'>
                                      <i className="bi bi-person-fill"></i>
                                 </a>
                           </span>
                           <span> <a href={'#'} className={' aside-download-btn'}>دانلود بازار</a> </span>
                           <span>
                                <span className="dropdown">
                                      <a className="aside-menu-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                         aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical"></i>
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>

                                      </ul>
                                  </span>
                           </span>
                           <span>
                                 <a className="aside-bars-btn" href='#' onClick={menuActive}>
                                      <i className="bi bi-list"></i>
                                 </a>
                           </span>
                       </span>
                   </div>
               </div>
            </div>
        );
    }
}

export default Header;
