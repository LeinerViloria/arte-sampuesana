import { Col, Row } from 'antd';
import Search from 'antd/es/input/Search';
import React, { Component } from 'react';

const Tags = [
    "Sobre nosotros", "Contactanos", "Pide ayuda"
];

const Items = Tags.map((item) => 
    <a className="text-body-header mr-3" href="">{item}</a>
);

export class Topbar extends Component {
    render() {
        return (
            <div className="d-flex">
                <div className="row px-xl-5 w-100">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center h-100 w-100">
                            {Items}
                        </div>
                    </div>
                    <div className='col-lg-6 text-center text-lg-right'>
                        <div className="col-lg-12 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Mi cuenta</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <button className="dropdown-item" type="button">Iniciar sesión</button>
                                        <button className="dropdown-item" type="button">Registrarse</button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-inline-flex align-items-center d-block d-lg-none">
                                <a href="" className="btn px-0 ml-2">
                                    <i className="fas fa-heart text-dark"></i>
                                    <span className="badge text-dark border border-dark rounded-circle padding_bottom_2px">0</span>
                                </a>
                                <a href="" className="btn px-0 ml-2">
                                    <i className="fas fa-shopping-cart text-dark"></i>
                                    <span className="badge text-dark border border-dark rounded-circle padding_bottom_2px">0</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <a href="" className="text-decoration-none">
                            <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                        </a>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <Search placeholder="input search text" allowClear style={{ width: 200 }} />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">Customer Service</p>
                        <h5 className="m-0">+012 345 6789</h5>
                    </div>
                </div> */}
            </div>
        );
    }
}
