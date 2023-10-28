import React, { Component } from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { useState } from "react";

interface NavMenuProps {}

interface NavMenuState {
  expanded: boolean;
}

class NavMenu extends Component<NavMenuProps, NavMenuState> {
    constructor(props: NavMenuProps) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    toggleIsExpanded = () => {
        this.setState({ expanded: !this.state.expanded });
    };
    render() {
        return (
            <React.Fragment>
                <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" onClick={this.toggleIsExpanded} style={{
                    height: "65px", padding: "0 30px"
                }}>
                    <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categorias</h6>
                    {this.state.expanded ? <CaretUpOutlined /> : <CaretDownOutlined />}
                </a>
                <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{
                    width: "calc(100% - 30px)",
                    zIndex: 999
                }}>
                    <div className="navbar-nav w-100">
                        <div className="nav-item dropdown dropright">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses <i className="fa fa-angle-right float-right mt-1"></i></a>
                            <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                <a href="" className="dropdown-item">Men's Dresses</a>
                                <a href="" className="dropdown-item">Women's Dresses</a>
                                <a href="" className="dropdown-item">Baby's Dresses</a>
                            </div>
                        </div>
                        <a href="" className="nav-item nav-link">Shirts</a>
                        <a href="" className="nav-item nav-link">Jeans</a>
                        <a href="" className="nav-item nav-link">Swimwear</a>
                        <a href="" className="nav-item nav-link">Sleepwear</a>
                        <a href="" className="nav-item nav-link">Sportswear</a>
                        <a href="" className="nav-item nav-link">Jumpsuits</a>
                        <a href="" className="nav-item nav-link">Blazers</a>
                        <a href="" className="nav-item nav-link">Jackets</a>
                        <a href="" className="nav-item nav-link">Shoes</a>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavMenu;