import { FloatButton } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import React, { Component } from 'react';
import {
    PlusCircleFilled, EditTwoTone, DeleteTwoTone
} from '@ant-design/icons'

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
    isReady: boolean
}

class ProductsManager extends Component<IComponentProp, IComponentState>
{
    constructor(props: IComponentProp)
    {
        super(props);
        this.state = {
            data: [],
            isReady: false
        }
    }

    getColumns():ColumnsType<IProduct>{
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

    edit(value: IProduct)
    {
        console.log(value);
    }

    delete(value: IProduct)
    {

    }

    create()
    {

    }

    componentDidMount() {
        axios.get('http://localhost:5084/Craftman/FirstWithProducts')
            .then(response => {
                this.setState({data: response.data.business.products, isReady: true});
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
            </React.Fragment>
        );
    }
}

export default ProductsManager;