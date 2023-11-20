import { Card, Pagination, Image, Row, Col, Rate } from 'antd';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import React, { Component } from 'react';
import ProductItem from '../../ProductItem/ProductItem';

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
        axios.get('http://localhost:5000/Craftman/FirstWithProducts')
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
                            <ProductItem product={product} />
                        </Col>
                    ))}
                </Row>
                <Pagination showQuickJumper defaultCurrent={2} total={this.state.data.length}/>
            </React.Fragment>
        );
    }
}

export default ProductsDashlet;