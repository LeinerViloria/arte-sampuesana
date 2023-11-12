import { Button, Card, Form, Input, Select, Spin } from 'antd';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import React, { Component } from 'react';

type FieldType = {
    rowid: number,
    name: string,
    lastname: string,
    gender: number
};

interface IComponentProp {}

interface IComponentState {
    currentValues: FieldType;
    isReady: boolean;
}

class CraftmanBasicInformation extends Component<IComponentProp, IComponentState> {

    constructor(props: IComponentProp)
    {
        super(props);
        this.state = {
            currentValues: {} as FieldType,
            isReady: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5084/Craftman/First')
            .then(response => {
                this.setState({ currentValues: response.data, isReady: true });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    onFinish(values: any) {
        console.log('Success:', values);
    };

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
                                    <Button type="primary" htmlType="submit">
                                        Guardar
                                    </Button>
                                </Form.Item>

                                <Form.Item
                                    label="Nombres"
                                    name="name"
                                    rules={[{ required: true, message: "Escribe tus nombres" }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Apellidos"
                                    name="lastname"
                                    rules={[{ required: true, message: "Escribe tus apellidos" }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item label="Género" name="gender" initialValue={0}>
                                    <Select>
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
