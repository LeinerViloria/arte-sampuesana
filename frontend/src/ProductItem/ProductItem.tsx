import { Card, Pagination, Image, Row, Col, Rate } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { Component } from 'react';

interface ProductItemProps {
    product: any,
    width?: number | string | undefined
}

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class ProductItem extends Component<ProductItemProps> {
    render() {
        const { product, width } = this.props;

        return (
            <React.Fragment>
                <Card bordered={false}>
                    <Image
                        src={product.image}
                        width={width}
                    />
                    <Title level={5} className='mt-2'>
                        {product.name}
                    </Title>
                    <p>${product.price}</p>
                    <div className='d-flex w-100 justify-content-center'>
                        <Rate tooltips={desc} value={product.stars} disabled />
                    </div>
                </Card>
            </React.Fragment>
        );
    }
}

export default ProductItem;
