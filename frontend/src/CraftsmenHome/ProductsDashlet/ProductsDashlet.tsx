import Title from 'antd/es/typography/Title';
import React, { Component } from 'react';

class ProductsDashlet extends Component {
    render() {
        return (
            <React.Fragment>
                <Title level={4}>
                    Mis productos
                </Title>
            </React.Fragment>
        );
    }
}

export default ProductsDashlet;