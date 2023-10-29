import { Card } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { Component } from 'react';
import './OrdersResume.tsx.css';

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
    render() {
        return (
            <React.Fragment>
                <div className='d-flex flex-column align-items-center'>
                    <Title level={4}>Notificaciones de pedidos</Title>
                    <div className={this.state.cssClass}>
                        {orders.map((order, index) => (
                            <Card className='mb-2 order-card'>
                                <div className="notification-title">Pedido #001</div>
                                <div className="notification-details">Producto: Product A</div>
                                <div className="notification-details">Cantidad: 3 unidades</div>
                                <div className="notification-details">Fecha: 28 de Octubre, 2023</div>
                            </Card>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default OrdersResume;