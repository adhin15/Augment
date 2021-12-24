import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContex";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SinglePlayer, MultiPlayer } from "../helper/helper";
import { Row, Col, Card } from "antd";

const GameDetail = () => {
    const { dark } = useContext(UserContext)
    const [detail, setDetail] = useState({});
    const url = "https://backendexample.sanbersy.com/api/data-game/"
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`${url}${id}`)
            setDetail(result.data)
        }
        fetchData();
    }, [id])
    return (
        <div className={!dark ? ("container bg-light") : ("container bg-dark")} style={{ minHeight: "100vh" }}>
            <Row justify="space-between" >
                <Col span={9} >
                    <img src={detail.image_url} alt="Not Found" style={{ width: "100%", maxheight: "600px", maxHeight: "600px", objectFit: "cover" }} />
                </Col>
                <Col span={14}>
                    <Row>
                        <Card
                            className="card-detail"
                            bodyStyle={{ padding: "0px", borderRadius: "8px" }}
                            style={{ borderRadius: "8px", margin: "0px", marginTop: "10px", width: "100%" }}
                        >
                            <Row style={{ padding: "16px" }}>
                                <Col>
                                    <Row >
                                        <h1 className="color-primary">
                                            {detail.name}

                                        </h1>
                                        <h1 className="accent"> ({detail.release}) </h1>
                                    </Row>
                                    <Row>
                                        <p style={{ margin: "0px" }}>
                                            Genre :
                                        </p>
                                    </Row>
                                    <Row>
                                        <p className="accent">
                                            {detail.genre}
                                        </p>
                                    </Row>
                                    <Row >
                                        <p style={{ margin: "0px" }}>
                                            Avalailable on :
                                        </p>
                                    </Row>
                                    <Row>
                                        <p className="accent">
                                            {detail.platform}
                                        </p>
                                    </Row>
                                    <Row >
                                        <p style={{ margin: "0px" }}>
                                            Playable For :
                                        </p>
                                    </Row>
                                    <Row>
                                        <p className="accent">
                                            {SinglePlayer(detail.singlePlayer)} {MultiPlayer(detail.multiplayer)}
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>

                    </Row>
                </Col>
            </Row>

        </div >

    )
}
export default GameDetail;