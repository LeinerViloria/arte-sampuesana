import React, { Component } from 'react';
import './NavBar.tsx.css';
import NavMenu from './Menu/NavMenu';

class NavBar extends Component {
    render() {
        return (
            <div className="container-fluid nav-background mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <NavMenu />
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <span className="text-decoration-none d-block d-lg-none">
                                <span className="h4 text-uppercase text-dark bg-light px-2">Arte</span>
                                <span className="h4 text-uppercase text-light bg-primary px-2 ml-n1">Sampuesana</span>
                            </span>
                            {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button> */}
                            {/* <NavBar /> */}
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse" style={{
                                height: "40px"
                            }}>
                                <div className="navbar-nav mr-auto py-0">
                                    <a href="index.html" className="nav-item nav-link active">Home</a>
                                    <a href="shop.html" className="nav-item nav-link">Shop</a>
                                    <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                                    <div className="nav-item dropdown">
                                        <span className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down mt-1"></i></span>
                                        <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                            <span className="dropdown-item">Shopping Cart</span>
                                            <span className="dropdown-item">Checkout</span>
                                        </div>
                                    </div>
                                    <span className="nav-item nav-link">Contact</span>
                                </div>

                                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <span className="btn px-0">
                                        <i className="fas fa-heart text-primary"></i>
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{
                                            paddingBottom: "2px"
                                        }}>0</span>
                                    </span>
                                    <span className="btn px-0 ml-3">
                                        <i className="fas fa-shopping-cart text-primary"></i>
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{
                                            paddingBottom: "2px"
                                        }}>0</span>
                                    </span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;