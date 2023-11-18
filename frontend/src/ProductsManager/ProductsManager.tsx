import { Breadcrumb, Button, FloatButton, Form, Input, InputNumber, Modal, Popconfirm } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import React, { Component } from 'react';
import {
    PlusCircleFilled, EditTwoTone, DeleteTwoTone, EyeTwoTone, HomeOutlined
} from '@ant-design/icons';
import { viewContext } from '../enums';
import ProductItem from '../ProductItem/ProductItem';

interface IProduct
{
    key: React.Key,
    rowid: number,
    name: string,
    price: number,
    image: string,
    stars: number,
    culturalInformation: string
}

interface IComponentProp {}

interface IComponentState {
    data: IProduct[],
    isReady: boolean,
    isModalVisible: boolean,
    selectedItem: IProduct,
    view: viewContext | undefined
}

class ProductsManager extends Component<IComponentProp, IComponentState>
{
    constructor(props: IComponentProp)
    {
        super(props);
        this.state = {
            data: [],
            isReady: false,
            isModalVisible: false,
            selectedItem: {} as IProduct,
            view: undefined
        }
    }

    getColumns(): ColumnsType<IProduct> {
        return [
            {
                title: 'Action',
                key: 'operation',
                fixed: 'left',
                width: 100,
                render: (item) =>
                    <div className={`d-flex w-100 justify-content-center`}>
                        <EditTwoTone className='p-2' onClick={() => this.edit(item)} />
                        <EyeTwoTone className='p-2' onClick={() => this.detail(item)} />
                        <Popconfirm
                            title="Estás eliminando un producto"
                            description="¿Estás seguro?"
                            onConfirm={() => this.delete(item)}
                            okText="Sí"
                            cancelText="No"
                        >
                            <DeleteTwoTone className='p-2'/>
                        </Popconfirm>
                    </div>,
            },
            { title: 'Nombre', dataIndex: 'name', key: '1' },
            { title: 'Precio', dataIndex: 'price', key: '2' },
            { title: 'Calificación', dataIndex: 'stars', key: '3' }
        ]
    }

    edit(value: IProduct) {
        this.setState({selectedItem: value, isModalVisible: true, view: viewContext.edit});
    }

    detail(value: IProduct) {
        this.setState({selectedItem: value, isModalVisible: true, view: viewContext.detail});
    }

    delete(value: IProduct) {
        console.log(value);
    }

    create = () => {
        this.setState({ isModalVisible: true, view: undefined, selectedItem: {} as IProduct });
    }

    handleModalOk = () => {
        console.log(this.state.selectedItem);
        this.setState({ isModalVisible: false, view: undefined, selectedItem: {} as IProduct });
    }

    handleModalCancel = () => {
        this.setState({ isModalVisible: false, view: undefined, selectedItem: {} as IProduct });
    }

    componentDidMount() {
        axios.get('http://localhost:5084/Craftman/FirstWithProducts')
            .then(response => {
                this.setState({ data: response.data.business.products, isReady: true });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    getModalTitle(): string
    {
        switch (this.state.view) {
            case viewContext.detail:
                return "";
            case viewContext.edit:
                return `${this.state.selectedItem.name}`;
            default:
                return "Crear producto";
        }
    }

    render() {
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
                        href: '/artesano',
                        title: 'Mi taller',
                    },
                    {
                        title: 'Administrar productos',
                    },
                    ]}
                />
                <Title level={3}> Productos </Title>
                <Table columns={this.getColumns()} dataSource={this.state.data} loading={!this.state.isReady} />
                <FloatButton tooltip={<div>Crear</div>} icon={<PlusCircleFilled />} onClick={this.create} />

                {/* Este condicional sale con la intención de controlar el refrezco de lo que se visualiza en el formulario */}
                {
                    this.state.isModalVisible ?
                    <Modal
                        title={this.getModalTitle()}
                        open={this.state.isModalVisible}
                        onOk={this.handleModalOk}
                        onCancel={this.handleModalCancel}
                        okText={this.state.view == viewContext.detail ? "Editar" : "Guardar"}
                        cancelText="Cerrar"
                    >
                        {
                            this.state.view == viewContext.detail ?
                            <ProductItem product={this.state.selectedItem} width={330} /> :
                            <React.Fragment>
                                <Form
                                name="productForm"
                                initialValues={this.state.selectedItem}
                                >
                                <Form.Item
                                    label="Nombre"
                                    name="name"
                                    rules={[{ required: true, message: 'Por favor ingresa el nombre del producto' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Precio"
                                    name="price"
                                    rules={[{ required: true, type: 'number', min: 0, message: 'Por favor ingresa un precio válido' }]}
                                >
                                    <InputNumber min={0} step={0.01} />
                                </Form.Item>

                                <Form.Item
                                    label="Imagen (URL)"
                                    name="image"
                                    rules={[{ required: true, message: 'Por favor ingresa la URL de la imagen' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Información Cultural"
                                    name="culturalInformation"
                                    rules={[{ required: true, message: 'Por favor ingresa la información cultural' }]}
                                >
                                    <Input.TextArea rows={4} />
                                </Form.Item>
                                </Form>
                            </React.Fragment>
                        }
                    </Modal> :
                    <React.Fragment></React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default ProductsManager;
