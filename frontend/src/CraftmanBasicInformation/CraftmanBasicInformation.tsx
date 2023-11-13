import { Button, Card, Form, Input, Select, Spin, message } from 'antd';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import React, { Component } from 'react';
import { viewContext } from '../enums';
import {
    SaveTwoTone, EditTwoTone, CloseCircleTwoTone
} from '@ant-design/icons';

type BusinessType = {
    rowid: number,
    name: string,
    qrUrl: string,
    rowidCraftman: number
}

type FieldType = {
    rowid: number,
    name: string,
    lastName: string,
    gender: number,
    business: BusinessType
};

interface IComponentProp {}

interface IComponentState {
    currentValues: FieldType;
    business: BusinessType,
    isReady: boolean,
    view: viewContext,
    businessView: viewContext
}

class CraftmanBasicInformation extends Component<IComponentProp, IComponentState> {

    constructor(props: IComponentProp)
    {
        super(props);
        this.state = {
            currentValues: {} as FieldType,
            business: {} as BusinessType,
            isReady: false,
            view: viewContext.detail,
            businessView: viewContext.detail
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5084/Craftman/First')
            .then(response => {
                this.setState({ currentValues: response.data, business: response.data.business, isReady: true });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    onFinish(value: FieldType)
    {
        console.log(value);
        axios.put('http://localhost:5084/Craftman/', value)
            .then(response => {
                message.success("Se guardó con éxito");
            }).catch(error => {
                console.error(error);
                message.error("Ocurrió un error");
            });
    };

    onBusinessFinish(value: BusinessType)
    {
        console.log(value);
        axios.put('http://localhost:5084/CraftmanBusiness/', value)
            .then(response => {
                message.success("Se guardó con éxito");
            }).catch(error => {
                console.error(error);
                message.error("Ocurrió un error");
            });
    };

    changeView()
    {
        const detail = viewContext.detail;
        const edit = viewContext.edit;
        this.setState({view: this.state.view === detail ? edit : detail});
    }

    changeBusinessView()
    {
        const detail = viewContext.detail;
        const edit = viewContext.edit;
        this.setState({businessView: this.state.businessView === detail ? edit : detail});
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.isReady ?
                    <Card>
                        <React.Fragment>
                            <Title level={4}>
                                Información personal
                            </Title>
                            <Form
                                layout='horizontal'
                                name='basicInformation'
                                initialValues={this.state.currentValues}
                                onFinish={this.onFinish}
                            >
                                <Form.Item wrapperCol={{ span: 24 }}>
                                    {
                                        this.state.view === viewContext.detail ?
                                        <Button type="dashed" htmlType="button" onClick={() => this.changeView()}>
                                            <EditTwoTone />
                                        </Button>
                                        :
                                        <React.Fragment>
                                            <Button type="dashed" htmlType="button" onClick={() => this.changeView()}>
                                                <CloseCircleTwoTone />
                                            </Button>
                                            <Button type="dashed" htmlType="submit">
                                                <SaveTwoTone />
                                            </Button>
                                        </React.Fragment>
                                    }
                                </Form.Item>

                                <Form.Item
                                    name="rowid"
                                    hidden={true}
                                />

                                <Form.Item
                                    label="Nombres"
                                    name="name"
                                    rules={[{ required: true, message: "Escribe tus nombres" }]}
                                >
                                    <Input disabled={this.state.view === viewContext.detail} />
                                </Form.Item>

                                <Form.Item
                                    label="Apellidos"
                                    name="lastName"
                                    rules={[{ required: true, message: "Escribe tus apellidos" }]}
                                >
                                    <Input disabled={this.state.view === viewContext.detail} />
                                </Form.Item>

                                <Form.Item label="Género" name="gender" initialValue={0}>
                                    <Select disabled={this.state.view === viewContext.detail}>
                                        <Select.Option value={0}>
                                            Prefiero no decirlo
                                        </Select.Option>
                                        <Select.Option value={1}>
                                            Hombre
                                        </Select.Option>
                                        <Select.Option value={2}>
                                            Mujer
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Title level={4}>
                                Información del negocio
                            </Title>
                            <Form
                                layout='horizontal'
                                name='businessInformation'
                                initialValues={this.state.business}
                                onFinish={this.onBusinessFinish}
                            >
                                <Form.Item wrapperCol={{ span: 24 }}>
                                    {
                                        this.state.businessView === viewContext.detail ?
                                        <Button type="dashed" htmlType="button" onClick={() => this.changeBusinessView()}>
                                            <EditTwoTone />
                                        </Button>
                                        :
                                        <React.Fragment>
                                            <Button type="dashed" htmlType="button" onClick={() => this.changeBusinessView()}>
                                                <CloseCircleTwoTone />
                                            </Button>
                                            <Button type="dashed" htmlType="submit">
                                                <SaveTwoTone />
                                            </Button>
                                        </React.Fragment>
                                    }
                                </Form.Item>

                                <Form.Item
                                    name="rowid"
                                    hidden={true}
                                />

                                <Form.Item
                                    name="rowidCraftman"
                                    hidden={true}
                                />

                                <Form.Item
                                    label="Nombre del negocio"
                                    name="name"
                                    rules={[{ required: true, message: "¿Cómo se llama tu negocio?" }]}
                                >
                                    <Input disabled={this.state.businessView === viewContext.detail} />
                                </Form.Item>

                                <Form.Item
                                    label="Url"
                                    name="qrUrl"
                                    rules={[{ required: true, message: "Esta url podrá verse en un código QR" }]}
                                >
                                    <Input disabled={this.state.businessView === viewContext.detail} />
                                </Form.Item>
                            </Form>
                        </React.Fragment>
                    </Card>
                    :
                    <Spin tip="Loading" size="large" className='mt-3'>
                        <div className="content" />
                    </Spin>
                }
            </React.Fragment>
        );
    }
}

export default CraftmanBasicInformation;
