import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { UserContext } from "../context/UserContex";
import { Button, Row, Col, Form, Input, Checkbox, Card, message } from "antd"
import { useParams } from "react-router-dom";
import axios from "axios";

const GameForm = () => {
    const { GameUrl, setIdGame, idGame, setFetch } = useContext(ProductContext)
    const { header, dark } = useContext(UserContext)
    const { id } = useParams();
    const [form] = Form.useForm();

    useEffect(() => {
        const fetctData = async () => {
            if (id) {
                try {
                    const result = await axios.get(`${GameUrl}/${parseInt(id)}`);
                    form.setFieldsValue({
                        name: result.data.name,
                        genre: result.data.genre,
                        platform: result.data.platform,
                        release: result.data.release,
                        singlePlayer: result.data.singlePlayer === 1 ? true : false,
                        multiplayer: result.data.multiplayer === 1 ? true : false,
                        image_url: result.data.image_url
                    })
                    setIdGame(id);
                } catch (err) {
                    console.log(err);
                }
            } else {
                setIdGame(-1);
            }
        };
        fetctData();
        console.log(idGame)
    }, [id, form]);

    const GameSubmit = (e) => {
        if (idGame === -1) {
            axios
                .post(
                    `${GameUrl}`,
                    {
                        name: e.name,
                        genre: e.genre,
                        singlePlayer: e.singlePlayer ? 1 : 0,
                        multiplayer: e.multiplayer ? 1 : 0,
                        platform: e.platform,
                        release: e.release,
                        image_url: e.image_url,
                    },
                    { headers: header }
                )
                .then(() => {
                    message.success("Your data has been sent!", 2.5);
                    setFetch(false);
                    window.location = "/";
                });
        } else {
            axios
                .put(
                    `${GameUrl}/${idGame}`,
                    {
                        name: e.name,
                        genre: e.genre,
                        singlePlayer: e.singlePlayer ? 1 : 0,
                        multiplayer: e.multiplayer ? 1 : 0,
                        platform: e.platform,
                        release: e.release,
                        image_url: e.image_url,
                    },
                    { headers: header }
                )
                .then(() => {
                    message.success("Your data has been sent!", 2.5);
                    setFetch(false);
                    window.location = "/";
                });
        }
    };


    return (
        <>
            <div className={!dark ? ("container bg-light") : ("container bg-dark")} style={{ textAlign: "center" }}>
                <h1>Game Form</h1>
                <Row justify="center" align="top">
                    <Col span={16}>
                        <Card className="card-detail" style={{ color: "#ffffff" }}>
                            <Form
                                size="large"
                                onFinish={GameSubmit}
                                form={form}
                            >
                                <Row justify="space-between">
                                    <Col span={11}>
                                        <Form.Item className="form-class" name="name" label="Name" labelCol={{ span: 24 }}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input a name!',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="The great man"
                                            />
                                        </Form.Item>
                                        <Form.Item className="form-class" name="platform" label="Platform" labelCol={{ span: 24 }}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input a platform!',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Xbox, PS4, PC"
                                            />
                                        </Form.Item>
                                        <Form.Item className="form-class" name="release" label="Release Year" labelCol={{ span: 24 }}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input a release year!',
                                                },
                                            ]}
                                        >
                                            <Input type="number" placeholder="2007" style={{ appearance: "none" }} min={2007} max={2021}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={11}>
                                        <Form.Item className="form-class" name="genre" label="Genre" labelCol={{ span: 24 }}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input a genre!',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Action, Horror"
                                            />
                                        </Form.Item>
                                        <Form.Item className="form-class" name="image_url" label="Image Url" labelCol={{ span: 24 }}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input an image url!',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="https://google.com/image.png"
                                            />
                                        </Form.Item>
                                        <Row>
                                            <Col span={12}>
                                                <Form.Item className="form-class" name="singlePlayer" label="Single Player"
                                                    valuePropName="checked">
                                                    <Checkbox>
                                                    </Checkbox>
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item className="form-class" name="multiplayer" label="Multi Player"
                                                    valuePropName="checked">
                                                    <Checkbox>
                                                    </Checkbox>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" style={{ background: "#556E53", border: "0" }}>
                                            Submit
                                        </Button>
                                    </Form.Item></Row>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default GameForm;