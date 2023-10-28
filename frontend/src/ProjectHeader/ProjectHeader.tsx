import './ProyectHeader.css';
import { Header } from "antd/es/layout/layout";
import React from "react";
import { Topbar } from './Topbar/Topbar';
import NavBar from './NavBar/NavBar';

function ProjectHeader() {
    return (
        <Header style={{ padding: 0 }}>
            <Topbar />
            <NavBar />
        </Header>
    )
}

export default ProjectHeader;