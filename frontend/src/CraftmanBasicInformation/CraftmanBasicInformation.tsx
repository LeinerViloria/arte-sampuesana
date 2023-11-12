import { Button, Form, Input, Select } from 'antd';
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
}

class CraftmanBasicInformation extends Component<IComponentProp, IComponentState> {

    constructor(props: IComponentProp) {
        super(props);
        this.state = {
            currentValues: {} as FieldType
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5084/Craftman/First')
            .then(response => {
                this.setValues(response.data);
                this.forceUpdate();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    setValues(values: FieldType) {
        console.log(values);
        this.setState({ currentValues: values });
    }

    onFinish(values: any) {
        console.log('Success:', values);
    };

    render() {
        return (
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

                    <Form.Item label="Género" name="gender">
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

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Guardar
                        </Button>
                    </Form.Item>
                </Form>
            </React.Fragment>
        );
    }
}

export default CraftmanBasicInformation;
