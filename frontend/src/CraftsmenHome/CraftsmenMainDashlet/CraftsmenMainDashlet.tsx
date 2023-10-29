import { Carousel } from 'antd';
import React, { Component } from 'react';
import './CraftsmenMainDashlet.tsx.css';

class CraftsmenMainDashlet extends Component {
    render() {
        return (
            <React.Fragment>
                <Carousel dotPosition='bottom' autoplay>
                    <div>
                        1
                    </div>
                    <div>
                        2
                    </div>
                    <div>
                        3
                    </div>
                </Carousel>
            </React.Fragment>
        );
    }
}

export default CraftsmenMainDashlet;