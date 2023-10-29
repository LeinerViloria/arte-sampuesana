import { Flex, Progress, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { Component } from 'react';

class PersonalInformationDashlet extends Component {
    render() {
        return (
            <React.Fragment>
                <Flex vertical={false}>
                    <Space wrap align={'center'}>
                        <Title level={5} className='mr-2'>
                            <a href='/artesano/basicInformation'>
                                Información personal y cultural
                            </a>
                        </Title>
                        <Progress type="circle" percent={75} />
                    </Space>
                </Flex>
            </React.Fragment>
        );
    }
}

export default PersonalInformationDashlet;