import { Card, Col, Row } from 'antd';
import React from 'react';
import './CraftsmenHome.tsx.css';
import CraftsmenMainDashlet from './CraftsmenMainDashlet/CraftsmenMainDashlet';

function CraftsmenHome()
{
    return (
        <Row gutter={[24, 16]}>
            <Col span={16} className='max_height_card'>
                <Card className='h-100' bordered={false}>
                    <CraftsmenMainDashlet />
                </Card>
            </Col>
            <Col span={8} className='max_height_card'>
                <Row>
                    <Card className='w-100'>
                        <p>Hola</p>
                    </Card>
                </Row>
                <Row>
                    <Card className='w-100'>
                        <p>Hola</p>
                    </Card>
                </Row>
            </Col>
        </Row>
    );
}

export default CraftsmenHome;