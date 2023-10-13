import { Col, Row } from 'antd';
import './ProyectHeader.css';
import { Header } from "antd/es/layout/layout";
import React from "react";

function ProjectHeader() {
    return (
        <React.Fragment>
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <Row>
                    <Col span={12}>SEARCH</Col>
                    <Col span={4}>LOGO</Col>
                    <Col span={8}>ArteSampuesana</Col>
                </Row>
            </Header>
        </React.Fragment>
    )
}

export default ProjectHeader;