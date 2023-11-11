import { Button, Card, Col, Modal, QRCode, Row } from 'antd';
import React, { useState } from 'react';
import './CraftsmenHome.tsx.css';
import CraftsmenMainDashlet from './CraftsmenMainDashlet/CraftsmenMainDashlet';
import PersonalInformationDashlet from './PersonalInformationDashlet/PersonalInformationDashlet';
import Title from 'antd/es/typography/Title';
import ProductsDashlet from './ProductsDashlet/ProductsDashlet';

function CraftsmenHome()
{
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                                <a href='/artesano/culturalInformation'>
                                    Información cultural
                                </a>
                            </Title>
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
                                        <QRCode type="canvas" value="https://www.facebook.com/artesampues2020/" />
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