import { Card, Pagination, Image, Row, Col, Rate } from 'antd';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import React, { Component } from 'react';

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
    },
    {
        "name": "Producto 4",
        "price": 22000,
        "mark": 4,
        "image": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
        "name": "Producto 5",
        "price": 45000,
        "mark": 5,
        "image": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
        "name": "Producto 6",
        "price": 76000,
        "mark": 1,
        "image": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
        "name": "Producto 7",
        "price": 32000,
        "mark": 2,
        "image": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
        "name": "Producto 8",
        "price": 69000,
        "mark": 3,
        "image": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
        "name": "Producto 9",
        "price": 42000,
        "mark": 4,
        "image": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
        "name": "Producto 10",
        "price": 57000,
        "mark": 5,
        "image": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
        "name": "Producto 11",
        "price": 32000,
        "mark": 1,
        "image": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
        "name": "Producto 12",
        "price": 80000,
        "mark": 2,
        "image": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
];

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

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
    data: IProduct[]
}

class ProductsDashlet extends Component<IComponentProp, IComponentState>
{
    constructor(props: IComponentProp)
    {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5084/Craftman/FirstWithProducts')
            .then(response => {
                this.setState({ data: response.data.business.products });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <Title level={4}>
                    Mis productos
                </Title>
                <Row className='w-100'>
                    {this.state.data.map((product, index) => (
                        <Col span={6} className='w-100 mb-3'>
                            <Card bordered={false}>
                                <Image
                                    src={product.image}
                                />
                                <Title level={5} className='mt-2'>
                                    {product.name}
                                </Title>
                                <p>${product.price}</p>
                                <div className='d-flex w-100 justify-content-center'>
                                    <Rate tooltips={desc} value={product.stars} disabled />
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Pagination showQuickJumper defaultCurrent={2} total={this.state.data.length}/>
            </React.Fragment>
        );
    }
}

export default ProductsDashlet;