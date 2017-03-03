import React from 'react';
import {Row, Col, Menu, Icon, Tabs, message, Input, Form, Modal, Button} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
class MobileHeader extends React.Component {
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

    componentWillMount() {
        if (localStorage.userid != '') {
            this.setState({hasLogined: true});
            this.setState({userNickName: localStorage.userNickname, userid: localStorage.userid});
            this.setState({hasLogined: true});
        }
    }

    setModalVisible(value) {
        this.setState({modalVisible: value})
    }

    handleClick(e) {
        if (e.key == 'register') {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        } else {
            this.setState({current: e.key})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        // var formData = this.props.form.getFieldValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                fetch("http://newsapi.gugujiankong.com/Handler.ashx?" +
                    "action=" + this.state.action +
                    "&username=" + values.userName +
                    "&password=" + values.password +
                    "&r_userName=" + values.r_userName +
                    "&r_password=" + values.r_password +
                    "&r_confirmPassword=" + values.r_confirmPassword,
                    myFetchOptions)
                    .then(response => response.json())
                    .then(json => {
                        this.setState({userNickName: json.NickUserName, userid: json.UserId});
                        localStorage.userid = json.UserId;
                        localStorage.userNickname = json.NickUserName
                    });
                if (this.state.action == 'login') {
                    this.setState({hasLogined: true});
                }
                message.success('请求成功');
                this.setModalVisible(false);
            }
        });

    }

    logout() {
        localStorage.userid = '';
        localStorage.userNickname = '';
        this.setState({hasLogined: false});
    }

    login() {
        this.setModalVisible(true)
    }

    callback() {
        if (key == 1) {
            this.setState({action: 'login'});
        } else if (key == 2) {
            this.setState({action: 'register'});
        }
    }

    render() {
        let {getFieldProps}=this.props.form;//用来接收页面参数
        const userShow = this.state.hasLogined
            ?
            <Link>
                <Icon type="inbox"/>
            </Link>
            :
            <Icon type="setting" onClick={this.login.bind(this)}/>;
        return (
            <div id="mobileheader">
                <header>
                    <img src="./src/images/logo.png"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>
                <Modal title="用户中心"
                       wrapClassName="vertical-center-modal"
                       visible={this.state.modalVisible}
                       onCancel={() => this.setModalVisible(false)}
                       onOk={() => this.setModalVisible(false)}
                       okText="关闭">
                    <Tabs type="card" onChange={this.callback.bind(this)}>
                        <TabPane tab="登录" key="1">
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    <Input placeholder="请输入您的账号" {...getFieldProps('userName')}/>
                                </FormItem>
                                <FormItem label="密码">
                                    <Input type="password"
                                           placeholder="请输入您的密码" {...getFieldProps('password')}/>
                                </FormItem>
                                <Button type="primary" htmlType="submit">登录</Button>
                            </Form>
                        </TabPane>
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
            </div>
        );
    }
}

export default MobileHeader = Form.create({})(MobileHeader);