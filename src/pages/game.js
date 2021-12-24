import React, { useContext, useState } from "react";
import { Total } from "../helper/helper";
import { UserContext } from "../context/UserContex";
import { ProductContext } from "../context/ProductContext";
import { Row, Col, Pagination } from "antd";
import GameList from "../component/game-list";

const Game = () => {
    const { gameList } = useContext(ProductContext)
    const { dark } = useContext(UserContext)
    const [itemFrom, setItemFrom] = useState(0);
    const [itemTo, setItemTo] = useState(8);

    const onChange = (e) => {
        setItemFrom((e - 1) * 8);
        setItemTo(e * 8);
    };

    return (
        <div className={!dark ? ("container bg-light") : ("container bg-dark")}>
            <h1>Game List</h1>
            <Row>
                {gameList.slice(itemFrom, itemTo).map((item) => {
                    return (
                        <Col span={8} key={item.id}>
                            <GameList
                                id={item.id}
                                name={item.name}
                                image_url={item.image_url}
                                release={item.release}
                                platform={item.platform} />
                        </Col>
                    )
                })
                }

            </Row>

            <Row justify="center">
                <Pagination
                    defaultCurrent={1}
                    total={Total(gameList)}
                    defaultPageSize={8}
                    onChange={onChange}
                />
            </Row>
        </div>
    )
}

export default Game;