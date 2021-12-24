import React, { useContext } from "react"
import { UserContext } from "../context/UserContex"
import { Button, Row, Col, Form, Input, Card } from "antd"

const Register = () => {
    const { registerForm, dark } = useContext(UserContext)

    const [form] = Form.useForm();

    const onFinish = (values) => {
        registerForm(values);
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
        <div className={!dark ? ("container bg-light") : ("container bg-dark")}>
            <Row justify="center" align="middle">
                <Col span={8}>
                    <h1>Sign Up</h1>
                    <p>Create Your New Account</p>
                    <Card className="card-detail" style={{ color: "#ffffff" }}>
                        <Form
                            {...layout}
                            form={form}
                            size="large"
                            onFinish={onFinish}
                        >
                            <Form.Item name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input a valid email!',
                                    },
                                ]}
                            >
                                <Input placeholder="Your Name"
                                />
                            </Form.Item>
                            <Form.Item name="email"
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
                            <Form.Item name="password"
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
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Register;