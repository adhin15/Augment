import React from "react";
import { Row, Col, Card } from "antd";
import { Rating } from "../helper/helper";
import { Link } from "react-router-dom";

const MovieList = ({ id, image_url, title, year, rating, }) => {
    return (
        <Card
            className="card"
            bodyStyle={{ padding: "0px", borderRadius: "8px" }}
            style={{ borderRadius: "8px", marginBottom: "10px" }}
        >
            <Link to={`/movie/${id}`}>
                <Row>
                    <Col span={12}>
                        <img
                            src={image_url}
                            alt="Not Found"
                            style={{
                                margin: "0px",
                                height: "185px",
                                width: "150px",
                                borderRadius: "8px 0px 0px 8px",
                                objectFit: "cover",
                            }}
                        />
                    </Col>
                    <Col span={12} style={{ padding: "20px" }}>
                        <Row>
                            <h3 style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {title}
                            </h3>
                        </Row>
                        <Row>
                            <p>
                                {year}
                            </p>
                        </Row>
                        <div style={{ position: "absolute", bottom: "0" }}>
                            <Row>
                                {Rating(rating)}
                            </Row>
                            <Row>
                                <p>{rating}/10</p>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Link>
        </Card>
    );
};
export default MovieList;
