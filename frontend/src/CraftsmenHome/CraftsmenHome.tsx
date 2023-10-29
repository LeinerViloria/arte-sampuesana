import { Card, Col, Row } from 'antd';
import React from 'react';

function CraftsmenHome()
{
    return (
        <Row>
            <Col span={16}>
                <Card>
                    <p>Hola</p>
                </Card>
            </Col>
            <Col span={8}>
                <Row>
                    <Card>
                        <p>Hola</p>
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <p>Hola</p>
                    </Card>
                </Row>
            </Col>
        </Row>
    );
}

export default CraftsmenHome;