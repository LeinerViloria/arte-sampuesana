import { Card, Descriptions } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { Component } from 'react';
import './OrdersResume.tsx.css';

class Order
{
    id?: number;
    productName?: string;
    amount?: number;
    date?: Date;
}

const orders: Order[] = [
    { id: 1, productName: "Product A", amount: 10, date: new Date("2023-10-29") },
    { id: 2, productName: "Product B", amount: 5, date: new Date("2023-10-28") },
    { id: 3, productName: "Product C", amount: 8, date: new Date("2023-10-27") },
    { id: 4, productName: "Product D", amount: 12, date: new Date("2023-10-26") },
    { id: 5, productName: "Product E", amount: 7, date: new Date("2023-10-25") }
];

interface OrdersResumeProp{
    cssClass: any;
}

interface OrdersResumeState{
    cssClass?: string;
}

class OrdersResume extends Component<OrdersResumeProp, OrdersResumeState>
{
    constructor(props: OrdersResumeProp) {
        super(props);
        this.state = {
            cssClass: props.cssClass
        }
    }

    getItems(item: Order)
    {
        return [
            {
              key: '1',
              label: 'Producto',
              children: item.productName,
            },
            {
              key: '2',
              label: 'Cantidad',
              children: `${item.amount} unidades`,
            },
            {
              key: '3',
              label: 'Fecha',
              children: `${item.date?.getFullYear()}/
              ${item.date?.getMonth()}/
              ${item.date?.getDate()}`,
            }
          ];
    }
    render() {
        return (
            <React.Fragment>
                <div className='d-flex flex-column align-items-center'>
                    <Title level={4}>Notificaciones de pedidos</Title>
                    <div className={this.state.cssClass}>
                        {orders.map((order, index) => (
                            <Card className='mb-2 order-card'>
                                <Descriptions
                                    title={`Pedido #${order.id}`}
                                    items={this.getItems(order)}
                                    column={1}
                                />
                            </Card>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default OrdersResume;