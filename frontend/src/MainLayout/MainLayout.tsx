import React from "react";
import ProjectHeader from "../ProjectHeader/ProjectHeader";
import Layout, { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import { RouterProvider } from "react-router-dom";
import router from '../router-manager';


function MainLayout() {
    return (
        <React.Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Row>
                    <Col span={24}>
                        <ProjectHeader />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Content style={{ margin: '24px 16px' }}>
                            <RouterProvider router={router} />
                        </Content>
                    </Col>
                </Row>
            </Layout>
        </React.Fragment>
    )
}

export default MainLayout;