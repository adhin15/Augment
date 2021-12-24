import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { UserContext } from "../context/UserContex";
import { Button, Row, Col, Form, Input, Card, message } from "antd"
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieForm = () => {
    const { MovieUrl, setIdMovie, idMovie, setFetch } = useContext(ProductContext)
    const { header, dark } = useContext(UserContext)
    const { id } = useParams();
    const [form] = Form.useForm();

    useEffect(() => {
        const fetctData = async () => {
            if (id) {
                try {
                    const result = await axios.get(`${MovieUrl}/${parseInt(id)}`);
                    form.setFieldsValue({
                        title: result.data.title,
                        description: result.data.description,
                        year: result.data.year,
                        duration: result.data.duration,
                        genre: result.data.genre,
                        rating: result.data.rating,
                        review: result.data.review,
                        image_url: result.data.image_url,
                    })
                    setIdMovie(id);
                } catch (err) {
                    console.log(err);
                }
            } else {
                setIdMovie(-1);
            }
        };
        fetctData();

    }, [id, form, MovieUrl]);

    const MovieSubmit = (e) => {
        if (idMovie === -1) {
            axios
                .post(
                    `${MovieUrl}`,
                    {
                        title: e.title,
                        description: e.description,
                        year: e.year,
                        duration: e.duration,
                        genre: e.genre,
                        rating: e.rating,
                        review: e.review,
                        image_url: e.image_url,
                    },
                    { headers: header }
                )
                .then(() => {
                    message.success("Your data has been sent!", 2.5);
                    setFetch(false);
                    window.location = "/movielist";
                });
        } else {
            axios
                .put(
                    `${MovieUrl}/${idMovie}`,
                    {
                        title: e.title,
                        description: e.description,
                        year: e.year,
                        duration: e.duration,
                        genre: e.genre,
                        rating: e.rating,
                        review: e.review,
                        image_url: e.image_url,
                    },
                    { headers: header }
                )
                .then(() => {
                    message.success("Your data has been sent!", 2.5);
                    setFetch(false);
                    window.location = "/movielist";
                });
        }
    };


    return (

        <div className={!dark ? ("container bg-light") : ("container bg-dark")} style={{ textAlign: "center" }}>
            <h1>Movie Form</h1>
            <Row justify="center" align="top">
                <Col span={16}>
                    <Card className="card-detail" style={{ color: "#ffffff" }}>
                        <Form
                            size="large"
                            onFinish={MovieSubmit}
                            form={form}
                        >
                            <Row justify="space-between">
                                <Col span={11}>
                                    <Form.Item className="form-class" name="title" label="Title" labelCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input a title!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="The great man"
                                        />
                                    </Form.Item>
                                    <Form.Item className="form-class" name="genre" label="Genre" labelCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input a genre!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Xbox, PS4, PC"
                                        />
                                    </Form.Item>
                                    <Form.Item className="form-class" name="rating" label="Rating" labelCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input a rating!',
                                            },
                                        ]}
                                    >
                                        <Input type="number" placeholder="1-10" style={{ appearance: "none" }} min={1} max={10}
                                        />
                                    </Form.Item>
                                    <Form.Item className="form-class" name="description" label="Description" labelCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input a genre!',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea placeholder="........"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={11}>
                                    <Form.Item className="form-class" name="year" label="Year" labelCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input a year!',
                                            },
                                        ]}
                                    >
                                        <Input type="number" placeholder="1900" min={1900} max={2021}
                                        />
                                    </Form.Item>
                                    <Form.Item className="form-class" name="duration" label="Duration (minutes)" labelCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input a duration!',
                                            },
                                        ]}
                                    >
                                        <Input type="number" placeholder="120mins"
                                        />
                                    </Form.Item>
                                    <Form.Item className="form-class" name="image_url" label="Image URL" labelCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input a duration!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="https://google.com/image.png"
                                        />
                                    </Form.Item>
                                    <Form.Item className="form-class" name="review" label="Review" labelCol={{ span: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input a review!',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea placeholder="........"
                                        />
                                    </Form.Item>
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

    )
}

export default MovieForm;