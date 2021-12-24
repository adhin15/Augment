import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContex";
import logoBlack from "../logo-black.png"
import logoWhite from "../logo-white.png"
import { Link, useLocation } from "react-router-dom";
import { Drawer, Button, Row, Col, Switch, Menu, Dropdown } from "antd";
import { MenuFoldOutlined, HomeOutlined, AppstoreAddOutlined, PlaySquareOutlined, LockOutlined, DownOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";


const Nav = () => {
    const [visible, setVisible] = useState(false);
    const { setLoginStatus, dark, setDark, userInfo } = useContext(UserContext);
    const { pathname } = useLocation();
    const Logout = () => {
        Cookies.remove('email')
        Cookies.remove('password')
        Cookies.remove('token')
        window.location = "/"
        setLoginStatus(false);
    }
    const ChangeTheme = () => {
        if (!dark) {
            setDark(true);
        } else {
            setDark(false);
        }
    }
    const menu = (
        <Menu style={{ background: "#556E53" }}>
            <Menu.Item key="0">
                <Link to="/changepassword" style={{ color: "#d1d4c9", fontWeight: "500" }}>
                    <LockOutlined />   Change Password
                </Link>
            </Menu.Item>
            <Menu.Item key="1" onClick={Logout}>
                <span style={{ color: "#d1d4c9", fontWeight: "500" }} ><LogoutOutlined /> Logout</span>
            </Menu.Item>
        </Menu>
    )
    const Logo = () => {
        return (
            <img src={logoWhite} alt="" style={{ width: "300px", height: "100px" }} />
        )
    }

    return (


        <div className={!dark ? ("topnav top-ligth") : ("topnav top-dark")}>
            <Row align="middle">
                <Col span={16} style={{ textAlign: "left" }}>
                    {Cookies.get('email') !== undefined ?
                        <Button
                            type="primary"
                            icon={<MenuFoldOutlined />}
                            onClick={() => setVisible(true)}
                            size="large"
                            style={{ background: "#556e53", border: "0", margin: "auto" }}
                        />
                        : (null)
                    }

                    <Drawer
                        title={<Logo />}
                        placement="left"
                        onClick={() => setVisible(false)}
                        onClose={() => setVisible(false)}
                        visible={visible}
                        bodyStyle={{ padding: "0px" }}
                        closable={false}
                        bodyStyle={{ background: "#152a38" }}
                    >
                        <div className="menu-drawer">
                            <Row>
                                <Link to="/">
                                    <div className="drawer-item">
                                        <HomeOutlined />
                                    </div>
                                    <div className="drawer-item">
                                        Home
                                    </div>
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/gamelist">
                                    <div className="drawer-item">
                                        <AppstoreAddOutlined />
                                    </div>
                                    <div className="drawer-item">
                                        Game List
                                    </div>
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/movielist">
                                    <div className="drawer-item">
                                        <PlaySquareOutlined />
                                    </div>
                                    <div className="drawer-item">
                                        Movie List
                                    </div>
                                </Link>
                            </Row>
                        </div>
                    </Drawer>
                    <Link className="logo-link" to="/" >
                        <img src={!dark ? logoBlack : logoWhite} className="logo" alt="logo" />
                    </Link>
                    <Link to="/" className={pathname === "/" ? ("active") : ""}>
                        Home
                    </Link>
                    <Link to="/game" className={pathname === "/game" ? ("active") : ""}>
                        Game
                    </Link>
                    <Link to="/movie" className={pathname === "/movie" ? ("active") : ""}>
                        Movie
                    </Link>
                </Col>
                <Col span={5}>
                    <h3> Ligth Mode :  <Switch onChange={ChangeTheme} /> </h3>


                </Col>
                <Col span={3}>
                    {Cookies.get('email') === undefined ?
                        <Link to="/login" className={pathname === "/login" ? ("active") : ""}>
                            Login</Link>
                        : null}
                    {Cookies.get('email') !== undefined ?
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Button type="primary" className="ant-dropdown-link" style={{ cursor: "pointer", background: "transparent", border: "0", color: "#93948f" }}>
                                <UserOutlined />  <span style={{ fontWeight: "500" }}> {userInfo.name}</span> <DownOutlined />
                            </Button>
                        </Dropdown>
                        : null
                    }
                </Col>
            </Row>
        </div>



        // this is for nav component wwith login
        //  {Cookies.get('username') !== undefined ?
        //                 <Link to="/">
        //                     <span style={{ cursor: "pointer" }} onClick={() => {
        //                         Cookies.remove('username')
        //                         Cookies.remove('password')
        //                         window.location("/")
        //                     }}>Logout</span>
        //                 </Link>
        //                 : null
        //             }
        //             {Cookies.get('username') === undefined ?
        //                 <Link to="/login">Login </Link>
        //                 : null}

        //             <Link to="/">Home</Link>

        //             {Cookies.get('username') !== undefined ?
        //                 <Link to="/">
        //                     <span style={{ cursor: "pointer" }} onClick={() => {
        //                         Cookies.remove('username')
        //                         Cookies.remove('password')

        //                     }}>Logout</span>
        //                 </Link> : null
        //             }
        //             {Cookies.get('username') === undefined ?
        //                 <Link to="/login">Login </Link>
        //                 : null}  */}



    )
}

export default Nav;