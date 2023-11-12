import { Button, Form, Input, Select } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { Component } from 'react';

type FieldType = {
    rowid: number,
    name: string;
    lastname: string;
    gender: number
};

const valoresActuales : FieldType = {
    rowid: 4,
    name: 'Nombre Actual',
    lastname: "Apellido actual",
    gender: 1
};

class CraftmanBasicInformation extends Component {
    onFinish(values: any){
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
                    initialValues={valoresActuales}
                    onFinish={this.onFinish}
                >
                    <Form.Item<FieldType>
                        label="Nombres"
                        name={"name"}
                        rules={[{required: true, message: "Escribe tus nombres"}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Apellidos"
                        name={"lastname"}
                        rules={[{required: true, message: "Escribe tus apellidos"}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Género" name={"gender"}>
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