import { Card } from 'antd';
import React, { Component } from 'react';

class Order
{
    id?: number;
    productName?: string;
    amount?: number;
    date?: Date
}

const orders: Order[] = [
    { id: 1, productName: "Product A", amount: 10, date: new Date("2023-10-29") },
    { id: 2, productName: "Product B", amount: 5, date: new Date("2023-10-28") },
    { id: 3, productName: "Product C", amount: 8, date: new Date("2023-10-27") },
    { id: 4, productName: "Product D", amount: 12, date: new Date("2023-10-26") },
    { id: 5, productName: "Product E", amount: 7, date: new Date("2023-10-25") }
];

class OrdersResume extends Component {
    render() {
        return (
            <React.Fragment>
                {orders.map((order, index) => (
                    <Card className='mb-2'>

                    </Card>
                ))}
            </React.Fragment>
        );
    }
}

export default OrdersResume;