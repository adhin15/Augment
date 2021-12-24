import React, { useContext } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { ProductProvider } from "../context/ProductContext";
import { UserProvider } from "../context/UserContex";
import { UserContext } from "../context/UserContex";
import Home from "../pages/home";
import Game from "../pages/game";
import Movie from "../pages/movie";
import GameDetail from "../pages/gamedetail";
import MovieDetail from "../pages/moviedetail";
import GameTable from "../pages/tableGame";
import GameForm from "../pages/gameForm";
import MovieTable from "../pages/tablemovie";
import MovieForm from "../pages/movieForm";
import ChangePassword from "../pages/changePassword";
import Nav from "../component/nav";
import Login from "../pages/login";
import Register from "../pages/register";

const Routes = () => {
    const { loginStatus } = useContext(UserContext);
    return (

        <Router>
            <Switch>
                <UserProvider>
                    <Nav />
                    <ProductProvider>

                        <Route exact path="/" >
                            <Home />
                        </Route>
                        <Route exact path="/game">
                            <Game />
                        </Route>
                        <Route path="/game/:id">
                            <GameDetail />
                        </Route>
                        <Route exact path="/movie">
                            <Movie />
                        </Route>
                        <Route path="/movie/:id">
                            <MovieDetail />
                        </Route>


                        <Route exact path="/gamelist">
                            {loginStatus ? <GameTable /> : <Redirect to="/" />}
                        </Route>
                        <Route path="/gamelist/create">
                            {loginStatus ? <GameForm /> : <Redirect to="/" />}
                        </Route>
                        <Route path="/gamelist/edit/:id">
                            {loginStatus ? <GameForm /> : <Redirect to="/" />}
                        </Route>
                        <Route exact path="/movielist">
                            {loginStatus ? <MovieTable /> : <Redirect to="/" />}
                        </Route>
                        <Route path="/movielist/create">
                            {loginStatus ? <MovieForm /> : <Redirect to="/" />}
                        </Route>
                        <Route path="/movielist/edit/:id">
                            {loginStatus ? <MovieForm /> : <Redirect to="/" />}
                        </Route>
                    </ProductProvider>


                    <Route path="/changepassword">
                        {loginStatus ? <ChangePassword /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/login"  >
                        {!loginStatus ? <Login /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/register"  >
                        {!loginStatus ? <Register /> : <Redirect to="/" />}
                    </Route>

                </UserProvider>
            </Switch>
        </Router>
    )
}
export default Routes;