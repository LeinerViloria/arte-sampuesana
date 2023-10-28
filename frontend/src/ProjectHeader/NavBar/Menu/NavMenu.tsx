import React, { Component } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { useState } from "react";
import { Dropdown, MenuProps, Space } from 'antd';

// interface NavMenuProps {}

// interface NavMenuState {
//   expanded: boolean;
// }

const items: MenuProps['items'] = [
    {
      key: '1',
      type: 'group',
      label: 'Productos',
      children: [
        {
          key: '1-1',
          label: '1st menu item',
        },
        {
          key: '1-2',
          label: '2nd menu item',
        },
      ],
    },
    {
      key: '2',
      label: 'Lorem ipsum',
      children: [
        {
          key: '2-1',
          label: '3rd menu item',
        },
        {
          key: '2-2',
          label: '4th menu item',
        },
      ],
    }
  ];

class NavMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <Dropdown
                    menu={{items}}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Categorias
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default NavMenu;