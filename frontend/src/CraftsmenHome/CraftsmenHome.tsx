import { Card, Col, Row } from 'antd';
import React from 'react';
import './CraftsmenHome.tsx.css';
import CraftsmenMainDashlet from './CraftsmenMainDashlet/CraftsmenMainDashlet';
import PersonalInformationDashlet from './PersonalInformationDashlet/PersonalInformationDashlet';
import Title from 'antd/es/typography/Title';

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
                        <PersonalInformationDashlet />
                    </Card>
                </Row>
                <Row>
                    <Card className='w-100'>
                        <Title level={5} className='mr-2'>
                            <a href='/artesano/culturalInformation'>
                                Información cultural
                            </a>
                        </Title>
                    </Card>
                </Row>
                <Row>
                    <Card className='w-100'>
                        <Title level={5} className='mr-2'>
                            <a href='/artesano/productsManager'>
                                Administrar productos
                            </a>
                        </Title>
                    </Card>
                </Row>
                <Row>
                    <Card className='w-100'>
                        <Title level={5} className='mr-2'>
                            <a href='/artesano/publication'>
                                Publicaciones
                            </a>
                        </Title>
                    </Card>
                </Row>
            </Col>
        </Row>
    );
}

export default CraftsmenHome;