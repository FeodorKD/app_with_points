import React, {FC, MouseEventHandler} from 'react';
import {IPoints} from "../../../types/dataTypes";
import classes from "./PointItem.module.css"
import AppLink from "../../ui/AppLink/AppLink";
import AppButton from "../../ui/button/AppButton";
import {useActions} from "../../../hooks/useActions";

const PointItem: FC<IPoints> = ({id, name, labels, coordinate}) => {
    const {deleteOnePoint} = useActions()
    const clickHandler: MouseEventHandler = () => {
        deleteOnePoint(id)
    }
    return (
        <div className={classes.item}>
            <div className={classes.info}>
                <p className={classes.id}>{id}</p>
                <p className={classes.name}>{name}</p>
            </div>
            <div className={classes.labels}>
                <p className={classes.name}>{labels.join(' ')}</p>
            </div>
            <AppLink className={classes.name} to={`/point/${id}`}>Check More</AppLink>
            <AppButton type="button" onClick={clickHandler}>Delete</AppButton>
        </div>
    );
};

export default PointItem;

