import React, { Component } from 'react'
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqlogin, reqLogin} from '../../api'
import logo from './images/logo.png'
import './css/login.less'

const {Item}=Form
export default class Login extends Component {
  onFinish = async values => {
    let result=await reqLogin(values)
    console.log(result)
  }
  render() {
    return (
    <div className="login">
        <header>
         
          <img src={logo} alt="logo"/>
          <h1>商品管理系统</h1>
        </header>
        <section>
          <span className="title">
            用户登录
          </span>
          <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
      >
      <Item
          name="username"
          rules={[
            {
              required: true,
              message: '用户名必须输入',
            },
            {
              max:12,
              message:'用户名最多不能超过12位呦'
            },
            {
              min:4,
              message:'用户名最少为4位呦'
            },
            {
              pattern:/^[0-9a-zA-Z_]{1,}$/,
              message:'用户名只能以数字,字母,下划线组成'
            }
          ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Item>
      <Item
        name="password"
        rules={[
          {
            required: true,
            message: '密码不能为空',
          },
          {
            max:12,
            message:'密码最多不能超过12位呦'
          },
          {
            min:4,
            message:'密码最少为4位呦'
          },
          {
            pattern:/^[0-9a-zA-Z_]{1,}$/,
            message:'密码只能以数字,字母,下划线组成'
          }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Item>

      <Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
       
      </Item>
    </Form>
        </section>
    </div>
    )
  }
}
