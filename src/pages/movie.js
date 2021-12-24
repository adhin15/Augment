import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContex";
import { ProductContext } from "../context/ProductContext";
import MovieList from "../component/movie-list";
import { Row, Col, Pagination } from "antd";
import { Total } from "../helper/helper";

const Movie = () => {
    const { dark } = useContext(UserContext);
    const { movieList } = useContext(ProductContext);

    const [itemFrom, setItemFrom] = useState(0);
    const [itemTo, setItemTo] = useState(8);
    const onChange = (e) => {
        setItemFrom((e - 1) * 8);
        setItemTo(e * 8);
    };

    return (
        <div className={!dark ? ("container bg-light") : ("container bg-dark")}>
            <h1>Movie List</h1>
            <Row>
                {movieList.slice(itemFrom, itemTo).map((item) => {
                    return (
                        <Col span={8} key={item.id}>
                            <MovieList
                                id={item.id}
                                image_url={item.image_url}
                                title={item.title}
                                year={item.year}
                                rating={item.rating}
                            />
                        </Col>
                    )
                })
                }

            </Row>
            <Row justify="center">
                <Pagination
                    defaultCurrent={1}
                    total={Total(movieList)}
                    defaultPageSize={8}
                    onChange={onChange}
                />
            </Row>
        </div>
    )
}
export default Movie;