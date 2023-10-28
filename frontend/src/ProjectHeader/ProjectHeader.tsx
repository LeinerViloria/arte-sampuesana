import { Col, Layout, Row } from 'antd';
import './ProyectHeader.css';
import { Header } from "antd/es/layout/layout";
import React from "react";
import Search from 'antd/es/input/Search';
import { Topbar } from './Topbar/Topbar';

function ProjectHeader() {
    return (
        <Header style={{ padding: 0 }}>
            <Topbar />
        </Header>
    )
}

export default ProjectHeader;