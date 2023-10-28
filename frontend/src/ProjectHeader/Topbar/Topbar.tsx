import { Dropdown, MenuProps, Space } from 'antd';
import Search from 'antd/es/input/Search';
import React, { Component } from 'react';
import {
    DownOutlined, HeartTwoTone, ShoppingCartOutlined
} from '@ant-design/icons';

const Tags = [
    "Sobre nosotros", "Contactanos", "Pide ayuda"
];

const InfoTitle = "Servicio personalizado";
const InfoNumber = "+012 345 6789";

const Items = Tags.map((item) => 
    <span className="text-body-header mr-3">{item}</span>
);

const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Iniciar sesión'
    },
    {
      key: '2',
      label: 'Registrarse'
    }
  ];

export class Topbar extends Component {
    render() {
        return (
            <React.Fragment>
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
                                        <Dropdown
                                            menu={{items}}
                                        >
                                            <span onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                    Mi cuenta
                                                    <DownOutlined />
                                                </Space>
                                            </span>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="d-inline-flex align-items-center d-block d-lg-none">
                                    <span className="btn px-0 ml-2">
                                        <HeartTwoTone />
                                        <span className="badge text-dark border border-dark rounded-circle padding_bottom_2px">4</span>
                                    </span>
                                    <span className="btn px-0 ml-2">
                                        <ShoppingCartOutlined />
                                        <span className="badge text-dark border border-dark rounded-circle padding_bottom_2px">5</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="align-items-center bg-light px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <span className="text-decoration-none">
                            <span className="h4 text-uppercase text-primary bg-dark px-2">
                                Arte
                            </span>
                            <span className="h4 text-uppercase text-dark bg-primary px-2 ml-n1">
                                Sampuesana
                            </span>
                        </span>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <Search placeholder="Busca productos" className='w-100' allowClear style={{ width: 200 }} />
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">{InfoTitle}</p>
                        <h5 className="m-0">{InfoNumber}</h5>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
