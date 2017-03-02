import React from 'react';
import {Row, Col, Menu, Icon, Tabs, message, Input, Form, Modal, Button} from 'antd';
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0,
        }
    }

    setModalVisible(value) {
        this.setState({modalVisible: value})
    }

    handleClick(e) {
        if (e.key == 'register') {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        }
    }

    handleSubmit(e) {

    }

    render() {
        let {getFieldProps}=this.props.form;//用来接收页面参数
        const userShow = this.state.hasLogined
            ?
            <Menu>
                <Menu.Item key="logout" className="register">
                    <Button type="primary" htmlType="buttom">{this.state.userNickName}</Button>
                    &nbsp;&nbsp;
                    <Link target="_blank">
                        <Button type="dashed" htmlType="button">个人中心</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button type="ghost" htmlType="button">退出</Button>
                </Menu.Item>
            </Menu>
            :
            <Menu.Item key="register" className="register">
                <Icon type="appstore"/>注册/登录
            </Menu.Item>;
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
                        <Menu mode="horizontal"
                              onClick={this.handleClick.bind(this)}
                              selectedKeys={[this.state.current]}>
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
                            {userShow}
                        </Menu>
                        <Modal title="用户中心"
                               wrapClassName="vertical-center-modal"
                               visible={this.state.modalVisible}
                               onCancel={() => this.setModalVisible(false)}
                               onOk={() => this.setModalVisible(false)} okText="关闭">
                            <Tabs type="card">
                                <TabPane tab="注册" key="2">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input type="password"
                                                   placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            <Input type="password"
                                                   placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword')}/>
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
export default PCHeader = Form.create()(PCHeader)