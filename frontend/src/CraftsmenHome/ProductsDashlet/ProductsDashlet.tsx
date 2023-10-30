import { Card, Pagination, Image } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { Component } from 'react';
import {
    StarTwoTone
} from '@ant-design/icons';

class Product
{
    name?:string;
    price?:number;
    mark?:number;
    image?:string;
}

const products: Product[] = [
    {
        "name": "Producto 1",
        "price": 10000,
        "mark": 1,
        "image": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
        "name": "Producto 2",
        "price": 36000,
        "mark": 2,
        "image": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
        "name": "Producto 3",
        "price": 58000,
        "mark": 3,
        "image": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
];

class ProductsDashlet extends Component {
    render() {
        return (
            <React.Fragment>
                <Title level={4}>
                    Mis productos
                </Title>
                <Card bordered={false} style={{
                    width:"20%"
                }}>
                    <Image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Title level={5} className='mt-2'>
                        Producto tal
                    </Title>
                    <p>$25000</p>
                    <div className='d-flex w-100 justify-content-center'>
                        <StarTwoTone />
                    </div>
                </Card>
                <Pagination showQuickJumper defaultCurrent={2} total={500}/>
            </React.Fragment>
        );
    }
}

export default ProductsDashlet;