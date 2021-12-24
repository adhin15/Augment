import React from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";

const GameList = ({ id, name, image_url, release, platform }) => {

    return (
        <Card
            className="card"
            bodyStyle={{ padding: "0px", borderRadius: "8px" }}
            style={{ borderRadius: "8px", marginBottom: "10px" }}
        >
            <Link to={`/game/${id}`}>
                <Row>
                    <Col span={12}>
                        <img
                            src={image_url}
                            alt="Not Found"
                            style={{
                                margin: "0px",
                                height: "200px",
                                width: "100%",
                                borderRadius: "8px 0px 0px 8px",
                                objectFit: "cover",
                            }}
                        />
                    </Col>
                    <Col span={12} style={{ padding: "20px" }}>
                        <Row>
                            <h3 style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</h3>
                        </Row>
                        <Row>
                            <p>{release}</p>
                        </Row>

                        <Row style={{ position: "absolute", bottom: "10px" }}>
                            <p>
                                Available on :{platform}
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Link>
        </Card>
    );
};
export default GameList;
