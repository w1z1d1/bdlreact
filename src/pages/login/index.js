import React from "react";
import {Button, Menu} from 'antd';
import 'antd/dist/antd.css';
import './loginstyle.css';
export default class Login extends React.Component {
    toBuyPage=()=>{
        this.props.history.push('/buy')
    }
    render() {
        const a1= {
            background:' yellow',
        }
        const bg={
            display:'inline-block',
            height: '706px',
            width:'1250px',
            background: `url(${require("C:\\Users\\16230\\Desktop\\bdlreact\\src\\pages\\login\\新品4.png")})`
        }
        const bg1= {
            display: 'inline-block',
            height: '706px',
            width: '1250px',
            background: `url(${require("C:\\Users\\16230\\Desktop\\bdlreact\\src\\pages\\login\\新品图.png")})`
        }
        const a= {
            frontsize: 100,
            color: '#FF0000',
        }
        return <div>
            <p><span style={a1}></span></p>
            <p><span style={bg}></span></p>
            <p><span style={bg1}></span></p>
            <Button type="link" onClick={this.toBuyPage} style={{left:'250px'}}>会员登录</Button>
            <Button type="link" onClick={this.toBuyPage} style={{left:'250px'}}>注册</Button>
            <h1 style = {a}>菜鸟教程</h1>
            <h2>菜鸟教程</h2>
            <h3>欢迎学习 React</h3>
        </div>

    }
}