import React from 'react';
import {Row, Col, Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class MobileFooter extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top'
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2017 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

