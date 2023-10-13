import './ProyectHeader.css';
import { Header } from "antd/es/layout/layout";
import React from "react";

function ProjectHeader() {
    return (
        <React.Fragment>
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <span>Hola</span>
            </Header>
        </React.Fragment>
    )
}

export default ProjectHeader;