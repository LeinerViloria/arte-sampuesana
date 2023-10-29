import { Carousel, Flex, Statistic, Switch } from 'antd';
import React, { Component } from 'react';
import './CraftsmenMainDashlet.tsx.css';
import {
    EyeTwoTone
} from '@ant-design/icons';
import WorkspaceStatistic from './WorkspaceStatistic/WorkspaceStatistic';

import { Typography } from 'antd';
import OrdersResume from './OrdersResume/OrdersResume';

const { Title } = Typography;

interface CraftsmenMainDashletProp{
    
}

interface CraftsmenMainDashletState{
    CanAutoplay: boolean;
}

class CraftsmenMainDashlet extends Component<CraftsmenMainDashletProp, CraftsmenMainDashletState>
{
    constructor(props: CraftsmenMainDashletProp)
    {
        super(props);
        this.state = {
            CanAutoplay: true
        };
    }

    onChange = (checked: boolean) => {
        this.setState({CanAutoplay: checked});
    };

    render() {
        return (
            <React.Fragment>
                <div style={{
                    position: 'absolute',
                    right:'10px',
                    zIndex: '3'
                }}>
                    <Switch defaultChecked title='Autonavegar' onChange={this.onChange} />
                </div>
                <Carousel dotPosition='bottom' autoplay={this.state.CanAutoplay}>
                    <React.Fragment>
                        <Flex gap="middle" vertical={false} justify='center' align='center'>
                            <Statistic title="Visitas" value={1128} prefix={<EyeTwoTone />} />
                            <Statistic title="Productos vendidos" value={112893} />
                        </Flex>
                    </React.Fragment>

                    <React.Fragment>
                        <Title level={4}> Los 3 articulos más vendidos en los ultimos 5 meses </Title>
                        <div className='d-flex justify-content-center mb-3'>
                            <WorkspaceStatistic />
                        </div>
                    </React.Fragment>

                    <React.Fragment>
                        <OrdersResume cssClass={"w-50"} />
                    </React.Fragment>
                </Carousel>
            </React.Fragment>
        );
    }
}

export default CraftsmenMainDashlet;