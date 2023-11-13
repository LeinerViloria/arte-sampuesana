import { FloatButton, Modal } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import React, { Component } from 'react';
import {
    PlusCircleFilled, EditTwoTone, DeleteTwoTone
} from '@ant-design/icons';

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
    isModalVisible: boolean  // Nuevo estado para controlar la visibilidad de la modal
}

class ProductsManager extends Component<IComponentProp, IComponentState>
{
    constructor(props: IComponentProp)
    {
        super(props);
        this.state = {
            data: [],
            isReady: false,
            isModalVisible: false  // Inicializa el estado de la modal en falso
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
                        <DeleteTwoTone className='p-2' onClick={() => this.delete(item)} />
                    </div>,
            },
            { title: 'Nombre', dataIndex: 'name', key: '1' },
            { title: 'Precio', dataIndex: 'price', key: '2' },
            { title: 'Calificación', dataIndex: 'stars', key: '3' }
        ]
    }

    edit(value: IProduct) {
        console.log(value);
    }

    delete(value: IProduct) {
        // Lógica para eliminar
    }

    create = () => {
        // Abre la modal al hacer clic en el botón "Crear"
        this.setState({ isModalVisible: true });
    }

    handleModalOk = () => {
        // Lógica cuando se hace clic en el botón "OK" de la modal
        // Puedes agregar aquí la lógica específica para el método create
        this.setState({ isModalVisible: false });
    }

    handleModalCancel = () => {
        // Lógica cuando se hace clic en el botón "Cancel" de la modal
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
                <Title level={3}> Productos </Title>
                <Table columns={this.getColumns()} dataSource={this.state.data} loading={!this.state.isReady} />
                <FloatButton tooltip={<div>Crear</div>} icon={<PlusCircleFilled />} onClick={this.create} />

                <Modal
                    title="Título de la Modal"
                    open={this.state.isModalVisible}
                    onOk={this.handleModalOk}
                    onCancel={this.handleModalCancel}
                >
                    Contenido de la modal
                </Modal>
            </React.Fragment>
        );
    }
}

export default ProductsManager;
