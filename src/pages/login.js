import React, { useContext } from "react"
import { UserContext } from "../context/UserContex"
import { Button, Row, Col, Form, Input, Card } from "antd"
import { Link } from "react-router-dom";

const Login = () => {
    const { loginForm, dark } = useContext(UserContext)
    const [form] = Form.useForm();




    const onFinish = (values) => {
        loginForm(values);
    };
    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 18,
        },
    };

    return (
        <div className={!dark ? ("container bg-light") : ("container bg-dark")} >
            <Row justify="center">
                <Col span={8}>
                    <h1>Sign In With Your Email</h1>
                    <p>Don't have account yet?  <Link to="/register">Sign Up</Link></p>
                    <Card className="card-detail" style={{ color: "#ffffff" }}>
                        <Form
                            {...layout}
                            form={form}
                            size="large"
                            onFinish={onFinish}
                            className="form-class"
                        >
                            <Form.Item name="email" label="Email" labelCol={{ span: 24 }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input a valid email!',
                                    },
                                ]}
                            >
                                <Input placeholder="Email Address"
                                />
                            </Form.Item>
                            <Form.Item name="password" label="Password" labelCol={{ span: 24 }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Password',
                                    },
                                ]}>
                                <Input.Password
                                    autoComplete="new-password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item
                            >
                                <Button type="primary" htmlType="submit" style={{ background: "#556E53", border: "0" }}>
                                    Sign in
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default Login