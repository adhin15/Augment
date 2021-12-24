import React, { useContext } from "react";
import { UserContext } from "../context/UserContex";
import { ProductContext } from "../context/ProductContext";
import GameList from "../component/game-list";
import MovieList from "../component/movie-list";
import { Col, Row } from "antd";


const Home = () => {
    const { dark } = useContext(UserContext);
    const { gameList, movieList } = useContext(ProductContext)
    return (
        <div className={!dark ? ("container bg-light") : ("container bg-dark")}>
            <h1>Latest Game</h1>
            <p className="header-label">Newest Games Uploaded!</p>
            <Row >
                {gameList.sort((a, b) => {
                    return b.release - a.release;
                }).slice(0, 3).map((item) => {
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
                })}
            </Row>
            <br />
            <br />
            <h1>Latest Movies</h1>
            <p className="header-label">Latest Released Movie!</p>
            <Row>
                {movieList.sort((a, b) => {
                    return b.year - a.year;
                }).slice(0, 3).map((item) => {
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
                })}
            </Row>

            <br />
            <br />
            <h1>Top Rated Movies</h1>
            <p className="header-label">Popular Movies!</p>
            <Row>
                {movieList.sort((a, b) => {
                    return b.rating - a.rating;
                }).slice(0, 3).map((item) => {
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
                })}
            </Row>
        </div>
    )
}
export default Home;