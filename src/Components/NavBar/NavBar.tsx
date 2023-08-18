import React from 'react';
import {Link} from "react-router-dom";
import AppLink from "../ui/AppLink/AppLink";
import {RoutePath} from "../../App/routes/routeConfig";
import classes from './NavBar.module.css'
const NavBar = () => {
    return (
        <nav className={classes.navbar}>
            <AppLink className={classes.link} to={RoutePath.main} children={'To main'}/>
            <AppLink className={classes.link} to={RoutePath.canvas} children={'To canvas'}/>
            <AppLink className={classes.link} to={RoutePath.pointList} children={'To point list'}/>
        </nav>
    );
};

export default NavBar;