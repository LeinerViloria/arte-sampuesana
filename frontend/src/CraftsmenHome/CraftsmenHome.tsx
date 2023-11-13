import { Breadcrumb, Button, Card, Col, Modal, QRCode, Row } from 'antd';
import React, { useState } from 'react';
import './CraftsmenHome.tsx.css';
import CraftsmenMainDashlet from './CraftsmenMainDashlet/CraftsmenMainDashlet';
import PersonalInformationDashlet from './PersonalInformationDashlet/PersonalInformationDashlet';
import Title from 'antd/es/typography/Title';
import ProductsDashlet from './ProductsDashlet/ProductsDashlet';
import axios from 'axios';
import {
    HomeOutlined
} from '@ant-design/icons';

function CraftsmenHome()
{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [business, setBusiness] = useState<any | null>(null);
    const [isReady, setIsReady] = useState(false);

    axios.get('http://localhost:5084/Craftman/First')
    .then(response => {
        setBusiness(response.data.business);
        setIsReady(true);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        const canvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
        console.log(canvas);
        if (canvas) {
            const url = canvas.toDataURL();
            const a = document.createElement('a');
            a.download = 'QRCode.png';
            a.href = url;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <React.Fragment>
            <Breadcrumb
                className='mb-3'
                items={[
                {
                    href: '/',
                    title: <HomeOutlined />,
                },
                {
                    title: 'Mi taller',
                },
                ]}
            />
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
                            <Title level={5}>
                                <a href='/artesano/productsManager'>
                                    Administrar productos
                                </a>
                            </Title>
                        </Card>
                    </Row>
                    <Row>
                        <Card className='w-100'>
                            <Title level={5}>
                                <Button type="link" block onClick={showModal}>
                                    Genera tu QR
                                </Button>
                                <Modal title="QR" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                                okText={"Descargar"}>
                                    <div id='myqrcode' className='w-100 d-flex justify-content-center align-items-center'>
                                        {isReady ? 
                                        <QRCode type="canvas" value={business.qrUrl} />
                                        :
                                        <span />
                                        }
                                    </div>
                                </Modal>
                            </Title>
                        </Card>
                    </Row>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Card className='w-100'>
                    <ProductsDashlet />
                </Card>
            </Row>
        </React.Fragment>
    );
}

export default CraftsmenHome;