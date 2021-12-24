import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContex";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Space } from "antd";

const MovieDetail = () => {
    const { dark } = useContext(UserContext);
    const [detail, setDetail] = useState({});
    const url = "https://backendexample.sanbersy.com/api/data-movie/"
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`${url}${id}`)
            setDetail(result.data)
            console.log(result)
        }
        fetchData();
    }, [id])
    return (
        <>
            <div className={!dark ? ("container bg-light") : ("container bg-dark")} style={{ minHeight: "100vh" }}>
                <Row justify="space-between" >
                    <Col span={8} >
                        <img src={detail.image_url} alt="Not Found" style={{ maxWidth: "100%", height: "600px", maxHeight: "600px", objectFit: "cover" }} />
                    </Col>
                    <Col span={14}>
                        <Space direction="vertical">
                            <Row>
                                <h1 className="color-primary">
                                    {detail.title}

                                </h1>
                                <h1 className="accent"> ({detail.year}) </h1>
                                <Card
                                    className="card-detail"
                                    bodyStyle={{ padding: "16px", borderRadius: "8px" }}
                                    style={{ width: "100%" }}
                                >

                                    <Row>
                                        <h1>Description</h1>
                                    </Row>
                                    <Row >
                                        <Col>
                                            <Row>
                                                <p>
                                                    {detail.description}
                                                </p>
                                            </Row>
                                            <Row>
                                                <Space size="large">
                                                    <Col>
                                                        <p>
                                                            Rating :
                                                        </p>
                                                        <p className="accent">
                                                            {detail.rating}/10
                                                        </p>
                                                    </Col>
                                                    <Col >
                                                        <p>
                                                            Genre :
                                                        </p>
                                                        <p className="accent">
                                                            {detail.genre}
                                                        </p>
                                                    </Col>
                                                    <Col>
                                                        <p>
                                                            Duration
                                                        </p>
                                                        <p className="accent">
                                                            {detail.duration}m
                                                        </p>
                                                    </Col>
                                                </Space>
                                            </Row>
                                        </Col>
                                    </Row>

                                </Card>

                            </Row>
                            <Row>
                                <Card
                                    className="card-detail"
                                    bodyStyle={{ padding: "16px", borderRadius: "8px" }}
                                    style={{ width: "100%" }}
                                >
                                    <h1>Review</h1>
                                    <p>
                                        "{detail.review}"
                                    </p>
                                </Card>
                            </Row>
                        </Space>
                    </Col>
                </Row>

            </div >
        </>
    )
}
export default MovieDetail;