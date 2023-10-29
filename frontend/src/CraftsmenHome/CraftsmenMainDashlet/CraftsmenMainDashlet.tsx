import { Carousel, Flex, Statistic } from 'antd';
import React, { Component } from 'react';
import './CraftsmenMainDashlet.tsx.css';
import {
    EyeTwoTone
} from '@ant-design/icons';
import WorkspaceStatistic from './WorkspaceStatistic/WorkspaceStatistic';

import { Typography } from 'antd';

const { Title } = Typography;

class CraftsmenMainDashlet extends Component {
    render() {
        return (
            <React.Fragment>
                <Carousel dotPosition='bottom' autoplay={true}>
                    <React.Fragment>
                        <Flex gap="middle" vertical={false} justify='center' align='center'>
                            <Statistic title="Visitas" value={1128} prefix={<EyeTwoTone />} />
                            <Statistic title="Productos vendidos" value={112893} />
                        </Flex>
                    </React.Fragment>

                    <React.Fragment>
                        <Title level={3}> Los 3 articulos más vendidos en los ultimos 5 meses </Title>
                        <div className='d-flex justify-content-center mb-3'>
                            <WorkspaceStatistic />
                        </div>
                    </React.Fragment>

                    <React.Fragment>
                        3
                    </React.Fragment>
                </Carousel>
            </React.Fragment>
        );
    }
}

export default CraftsmenMainDashlet;