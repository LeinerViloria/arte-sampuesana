import Table, { ColumnsType } from 'antd/es/table';
import Title from 'antd/es/typography/Title';
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

class ProductsManager extends Component {
    render() {
        return (
            <React.Fragment>
                <Title level={3}> Productos </Title>
                <Table columns={columns} />
            </React.Fragment>
        );
    }
}

export default ProductsManager;