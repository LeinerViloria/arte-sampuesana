import { Breadcrumb, FloatButton, Modal, Popconfirm } from 'antd';
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
        this.setState({ isModalVisible: true });
    }

    handleModalOk = () => {
        this.setState({ isModalVisible: false });
    }

    handleModalCancel = () => {
        this.setState({ isModalVisible: false });
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

                <Modal
                    title={this.state.selectedItem.rowid == undefined ? 
                        "Crear producto" :
                        `Producto - ${this.state.selectedItem.name}`}
                    open={this.state.isModalVisible}
                    onOk={this.handleModalOk}
                    onCancel={this.handleModalCancel}
                    okText={this.state.view == viewContext.detail ? "Editar" : "Guardar"}
                    cancelText="Cerrar"
                >
                    {
                        this.state.view == viewContext.detail ?
                        <ProductItem product={this.state.selectedItem} width={330} /> :
                        <p>Contenido de la modal</p>
                    }
                </Modal>
            </React.Fragment>
        );
    }
}

export default ProductsManager;
