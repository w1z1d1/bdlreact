import React from "react";
import {Modal, Button, Table, Input, message} from 'antd';
import fetchPost from "../util/fetch";

export default class Login extends React.Component {
    state = {
        dataSource: [],

        columns: [
            {
                title: '用户名',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: '密码',
                dataIndex: 'password',
                key: 'password',
            }
        ],
        visible:false,

    }



    componentDidMount() {
        let params = {};
        fetchPost("http://localhost:8080/user/getAll1", params)
            .then(
                res => {
                    this.getData(res);
                }
            )
    }




    getData = (list) => {
        this.setState({
            dataSource: list.map((item, index) => {
                return {
                    ...item,
                    username: item.username,
                    password: item.password,
                    key: index
                }
            })
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        let params={
            username:this.state.username,
            password:this.state.password
        }
        fetchPost("http://localhost:8080/user/insert",params)
            .then(
                res=>{
                    message.info("Success!")
                }
            )
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    setData=(e)=>{
        if(e.target.name==="username"){
            this.setState({
                username:e.target.value
            })
        }else if(e.target.name==="password"){
            this.setState({
                password:e.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    New
                </Button>
                <Table dataSource={this.state.dataSource} columns={this.state.columns}/>;

                <Modal
                    title="New"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>
                        Username：<Input
                        placeholder={"Please input your username:"}
                        name={"username"}
                        onChange={this.setData}/>

                    </p>
                    <p>
                        Password:<Input
                        placeholder={"Please input your password:"}
                        name={"password"}
                        onChange={this.setData}/>
                    </p>
                </Modal>


            </div>
        )

    }
}