import { Col, Row } from 'antd';
import './ProyectHeader.css';
import { Header } from "antd/es/layout/layout";
import React from "react";
import Search from 'antd/es/input/Search';

function ProjectHeader() {
    return (
        <React.Fragment>
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <Row>
                    <Col span={14} className='search_container'>
                        <Search
                            placeholder='Buscar'
                            allowClear
                         />
                    </Col>
                    <Col span={2}>LOGO</Col>
                    <Col span={8}>ArteSampuesana</Col>
                </Row>
            </Header>
        </React.Fragment>
    )
}

export default ProjectHeader;