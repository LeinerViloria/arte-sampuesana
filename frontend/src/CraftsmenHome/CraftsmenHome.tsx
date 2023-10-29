import { Card, Col, Row } from 'antd';
import React from 'react';
import './CraftsmenHome.tsx.css';

function CraftsmenHome()
{
    return (
        <Row gutter={[24, 16]}>
            <Col span={16} >
                <Card className='h-100'>
                    <p>Hola</p>
                </Card>
            </Col>
            <Col span={8}>
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