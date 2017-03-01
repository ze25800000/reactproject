import React from 'react';
import {Row, Col, Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class PCHeader extends React.Component {
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
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="/src/images/logo.png" alt=""/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="rocket"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="rocket"/>社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="rocket"/>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="rocket"/>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="rocket"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="rocket"/>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="rocket"/>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="rocket"/>时尚
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
