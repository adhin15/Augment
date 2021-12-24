import React, { useContext } from "react";
import { Button, Table, Space, message } from "antd";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";
import { ProductContext } from "../context/ProductContext";
import { UserContext } from "../context/UserContex";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieTable = () => {
    const { movieList, MovieUrl, setFetch, setMovieList } = useContext(ProductContext);
    const { header, dark } = useContext(UserContext)
    const arrayUniqueByKey = [...new Map(movieList.map(item => [item["genre"], item])).values()];

    const deleteMovies = (event) => {
        const id = parseInt(event.currentTarget.value);
        const fetchData = async () => {
            setMovieList(movieList.filter((item) => item.id !== id));
            await axios.delete(`${MovieUrl}/${id}`, { headers: header });
            await message.success("Data terhapus", 2.5);
            setFetch(false);
        };
        fetchData();
    };

    const columns = [
        {
            title: 'Image',
            render: (record) => (
                <Link to={`/movie/${record.id}`}>

                    <img src={record.image_url} style={{ width: "100%", height: "200px", objectFit: "cover" }} alt="" />
                </Link>
            ),
            width: "16%",
            key: 'image_url',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',

        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',

        },
        {
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
            filters: arrayUniqueByKey.map((item) => {
                return (
                    { text: item.genre, value: item.genre }
                )
            }),
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.genre.includes(value),
        },
        {
            title: 'Release Year',
            dataIndex: 'year',
            key: 'year',
            sorter: (a, b) => a.year - b.year,
        },
        {
            title: 'Rating',
            dataIndex: "rating",
            key: 'rating',
        },
        {
            title: 'Review',
            dataIndex: 'review',
            key: 'review',
            ellipsis: true
        },
        {
            title: "Action",
            key: "action",
            render: (record) => (
                <Space size="small">
                    <Button type="primary" style={{ background: "#b3b3b3", borderColor: "#b3b3b3" }}>
                        <Link
                            to={`/movielist/edit/${record.id}`}
                            style={{
                                textDecoration: "none",
                                color: "#ffffff",
                            }}
                        >
                            <EditFilled />
                        </Link>
                    </Button>
                    <Button type="danger" value={record.id} onClick={deleteMovies}>
                        <DeleteOutlined />
                    </Button>
                </Space>
            ),
        },

    ];
    return (
        <div className={!dark ? ("container bg-light") : ("container bg-dark")} style={{ padding: "48px" }}>
            <h1>Movies Data Table</h1>
            <Link to={"/movielist/create"}>
                <Button type="primary" style={{ background: "#556E53", border: "0" }}>
                    Create New Data
                </Button>
            </Link>

            <Table className="tableClass" dataSource={movieList} columns={columns} />
        </div>
    )
}
export default MovieTable;