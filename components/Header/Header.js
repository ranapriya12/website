import React from 'react'
import Link from 'next/link'


export default function Header() {
    return (
        <>

            <header className="main_header_area">
              
                <div className="header_menu" id="header_menu">
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-flex d-flex align-items-right justify-content-between w-100 pb-2 pt-2">

                                <div className="navbar-header">
                                <div class='logo'>Logo</div>
                                </div>

                                <div className="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav" id="responsive-menu">
                                        <li className="dropdown submenu active">
                                                <a className="white">Home</a>
                                            
                                        </li>
                                   <li className="submenu dropdown">
                                   <a className="white">Service</a>
                                    </li>
                                    <li className="submenu dropdown">
                                   <a className="white">Team</a>
                                    </li>
                                    </ul>
                                </div>


                                <div id="slicknav-mobile"></div>
                            </div>
                        </div>
                    </nav>
                </div>

            </header>

        </>
    )
}
