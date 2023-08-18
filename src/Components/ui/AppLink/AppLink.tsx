import React, {FC} from 'react';
import {Link, LinkProps} from "react-router-dom";
import classes from './AppLink.module.css'

const AppLink: FC<LinkProps> = (props) => {
    const {
        to,
        children,
        className,
    } = props;

    return (
        <Link to={to} className={`${classes.link} ${className}`}>
            {children}
        </Link>
    );
};

export default AppLink;