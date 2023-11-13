import Table, { ColumnsType } from 'antd/es/table';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import React, { Component } from 'react';

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

const columns: ColumnsType<IProduct> =
[
    {
        title: 'Action',
        key: 'operation',
        fixed: 'left',
        width: 100,
        render: () => <a>action</a>,
    },
    { title: 'Nombre', dataIndex: 'name', key: '1' },
    { title: 'Precio', dataIndex: 'price', key: '2' },
    { title: 'Calificación', dataIndex: 'stars', key: '3' }
]

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

    componentDidMount() {
        axios.get('http://localhost:5084/Craftman/FirstWithProducts')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    render() {
        return (
            <React.Fragment>
                <Title level={3}> Productos </Title>
                <Table columns={columns} dataSource={this.state.data} />
            </React.Fragment>
        );
    }
}

export default ProductsManager;