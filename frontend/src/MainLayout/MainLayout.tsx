import React from "react";
import ProjectHeader from "../ProjectHeader/ProjectHeader";
import Layout, { Content, Header } from "antd/es/layout/layout";


function MainLayout() {
    return (
        <React.Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Layout>
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <ProjectHeader />
                    </Header>
                </Layout>
                <Content style={{ margin: '24px 16px' }}>
                    Content
                </Content>
            </Layout>
        </React.Fragment>
    )
}

export default MainLayout;