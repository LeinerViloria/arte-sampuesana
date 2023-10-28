import React, { Component } from 'react';
import './NavBar.tsx.css';
import NavMenu from './Menu/NavMenu';
import { HeartTwoTone, ShoppingCartOutlined } from '@ant-design/icons';

class NavBar extends Component {
    render() {
        return (
            <div className="container-fluid nav-background mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <NavMenu />
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg navbar-dark py-3 py-lg-0 px-0">
                            <span className="text-decoration-none d-block d-lg-none">
                                <span className="h4 text-uppercase text-dark bg-light px-2">Arte</span>
                                <span className="h4 text-uppercase text-light bg-primary px-2 ml-n1">Sampuesana</span>
                            </span>
                            <span className="navbar-toggler">
                                <NavMenu />
                            </span>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse" style={{
                                height: "40px"
                            }}>
                                <div className="navbar-nav mr-auto py-0">
                                    <a href="/" className="nav-item nav-link active">Home</a>
                                    <a href="/artesano" className="nav-item nav-link">Mi taller</a>
                                </div>

                                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <span className="btn px-0">
                                        <HeartTwoTone />
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{
                                            paddingBottom: "2px"
                                        }}>4</span>
                                    </span>
                                    <span className="btn px-0 ml-3">
                                        <ShoppingCartOutlined />
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{
                                            paddingBottom: "2px"
                                        }}>5</span>
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