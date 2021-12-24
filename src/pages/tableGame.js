import React, { useContext } from "react";
import { Button, Table, Space, message } from "antd";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";
import { ProductContext } from "../context/ProductContext";
import { UserContext } from "../context/UserContex";
import { Link } from "react-router-dom";
import axios from "axios";


const GameTable = () => {
    const { gameList, setGameList, GameUrl, setFetch } = useContext(ProductContext);
    const { header, dark } = useContext(UserContext)
    const arrayUniqueByKey = [...new Map(gameList.map(item => [item["genre"], item])).values()];

    const deleteGame = (event) => {
        const id = parseInt(event.currentTarget.value);
        const fetchData = async () => {
            setGameList(gameList.filter((item) => item.id !== id));
            const res = await axios.delete(`${GameUrl}/${id}`, { headers: header });
            console.log(res);
            await message.success("Data terhapus", 2.5);
            setFetch(false);
        };
        fetchData();
    };

    const columns = [
        {
            title: 'Image',
            render: (record) => (
                <Link to={`/game/${record.id}`}>
                    <img src={record.image_url} style={{ width: "100%", maxHeight: "160px", objectFit: "cover" }} alt="" />
                </Link>
            ),
            key: 'image_url',
            width: "16%"
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Platform',
            dataIndex: 'platform',
            key: 'platform',

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
            title: 'Release',
            dataIndex: 'release',
            key: 'release',
            sorter: (a, b) => a.release - b.release,
        },
        {
            title: 'Single Player',
            render: (record) => (<>
                {record.singleplayer ? ("Yes") : ("No")}
            </>
            ),
            key: 'singleplayer',
        },
        {
            title: 'Multi Player',
            render: (record) => (<>
                {record.multiplayer ? ("Yes") : ("No")}
            </>
            ),
            key: 'multiplayer',
        },
        {
            title: "Action",
            key: "action",
            render: (record) => (
                <Space size="small">
                    <Button type="primary" style={{ background: "#b3b3b3", borderColor: "#b3b3b3" }}>
                        <Link
                            to={`/gamelist/edit/${record.id}`}
                            style={{
                                textDecoration: "none",
                                color: "#ffffff",
                            }}
                        >
                            <EditFilled />
                        </Link>
                    </Button>
                    <Button type="danger" value={record.id} onClick={deleteGame}>
                        <DeleteOutlined />
                    </Button>
                </Space>
            ),
        },

    ];


    return (
        <div className={!dark ? ("container bg-light") : ("container bg-dark")} style={{ padding: "48px" }}>
            <h1>Games Data Table</h1>
            <Link to={"/gamelist/create"}>
                <Button type="primary" style={{ background: "#556E53", border: "0" }}>
                    Create New Data
                </Button>
            </Link>

            <Table className="tableClass" dataSource={gameList} columns={columns} />
        </div>
    )
}
export default GameTable;