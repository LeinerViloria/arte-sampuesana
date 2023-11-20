import { Flex, Progress, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { Component } from 'react';
import axios from 'axios';

interface IComponentProp{
    
}

interface IComponentState{
    percentage: number;
}

let Data:any;
let component : any;

axios.get('http://localhost:5000/Craftman/First')
.then(response => {
    Data = response.data;
    component.updatePercentage();
})
.catch(error => {
    console.error('Error:', error);
});

class PersonalInformationDashlet extends Component<IComponentProp, IComponentState>
{
    constructor(props: IComponentProp)
    {
        super(props);
        this.state = {
            percentage: 0
        };
        component = this;
    }

    updatePercentage()
    {
        axios.get(`http://localhost:5000/Craftman/Percentage/${Data.rowid}`)
        .then(percentageRes => {
            let value: number = percentageRes.data;
            console.log(value);
            this.setState({percentage: value});
        }).catch(error => {
            console.error('Error con el porcentaje:', error);
        });
    }

    render() {
        return (
            <React.Fragment>
                <Flex vertical={false}>
                    <Space wrap align={'center'}>
                        <Title level={5} className='mr-2'>
                            <a href='/artesano/basicInformation'>
                                Administrar información personal
                            </a>
                        </Title>
                        <Progress type="circle" percent={this.state.percentage} />
                    </Space>
                </Flex>
            </React.Fragment>
        );
    }
}

export default PersonalInformationDashlet;