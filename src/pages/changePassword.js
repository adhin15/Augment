import React, { useContext } from "react";
import { UserContext } from "../context/UserContex"
import { Button, Row, Col, Form, Input, message } from "antd"
import axios from "axios";


const ChangePassword = () => {
    const { header, dark } = useContext(UserContext)
    const [form] = Form.useForm();
    const urlChangePassword = "https://backendexample.sanbersy.com/api/change-password";


    const registerForm = (e) => {

        axios.post(`${urlChangePassword}`, {
            "current_password": e.current_password,
            "new_password": e.new_password,
            "new_confirm_password": e.new_confirm_password
        }, { headers: header }
        )
            .then((response) => {
                message.success(response, 1.5);
                window.location = "/";
            })

    }

    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 18,
        },
    };
    return (
        <div className={!dark ? ("container bg-light") : ("container bg-dark")}>
            <Row justify="center" align="middle">
                <Col span={8}>
                    <h1>Change Your Password</h1>
                    <Form
                        {...layout}
                        form={form}
                        size="large"
                        onFinish={registerForm}
                        className="form-class"
                    >
                        <Form.Item name="current_password" label="Current password" labelCol={{ span: 24 }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your current password!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Your Current Password"
                            />
                        </Form.Item>
                        <Form.Item name="new_password" label="New Password" labelCol={{ span: 24 }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input a new password!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Your new password"
                            />
                        </Form.Item>
                        <Form.Item name="new_confirm_password" label="Confirm New Password" labelCol={{ span: 24 }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },

                            ]}>
                            <Input.Password
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                        >
                            <Button type="primary" htmlType="submit" style={{ background: "#556E53", border: "0" }}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
export default ChangePassword;