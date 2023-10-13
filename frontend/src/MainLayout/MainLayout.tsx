import React from "react";
import ProjectHeader from "../ProjectHeader/ProjectHeader";
import Layout, { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";


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
                            Content
                        </Content>
                    </Col>
                </Row>
            </Layout>
        </React.Fragment>
    )
}

export default MainLayout;