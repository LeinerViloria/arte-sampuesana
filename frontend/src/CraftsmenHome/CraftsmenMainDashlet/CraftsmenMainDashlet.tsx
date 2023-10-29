import { Carousel, Flex, Statistic } from 'antd';
import React, { Component } from 'react';
import './CraftsmenMainDashlet.tsx.css';
import {
    EyeTwoTone
} from '@ant-design/icons';

class CraftsmenMainDashlet extends Component {
    render() {
        return (
            <React.Fragment>
                <Carousel dotPosition='bottom' autoplay>
                    <React.Fragment>
                        <Flex gap="middle" vertical={false} justify='center' align='center'>
                            <Statistic title="Visitas" value={1128} prefix={<EyeTwoTone />} />
                            <Statistic title="Active Users" value={112893} />
                        </Flex>
                    </React.Fragment>

                    <React.Fragment>
                        2
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