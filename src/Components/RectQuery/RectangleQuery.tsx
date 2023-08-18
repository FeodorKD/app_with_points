import React, {FC, useState} from 'react';
import AppInput from "../ui/Input/AppInput";
import classes from "./RectangleQuery.module.css"
import {IPoints} from "../../types/dataTypes";
import AppButton from "../ui/button/AppButton";
import LabelItem from "./LabelItem/LabelItem";
import {rectQuery} from "./queryFunction";
import {useInput} from "../../hooks/useInput";

interface QueryProps {
    points: IPoints[]
}
type FormFields = {
    xCoord1: HTMLInputElement,
    yCoord1: HTMLInputElement,
    xCoord2: HTMLInputElement,
    yCoord2: HTMLInputElement,
}
const RectangleQuery: FC<QueryProps> = ({points}) => {
    const [labels, setLabels] = useState<string[]>([])
    const x1 = useInput(0)
    const y1 = useInput(0)
    const x2 = useInput(0)
    const y2 = useInput(0)
    const submitHandler: React.FormEventHandler<HTMLFormElement & FormFields>  = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const {xCoord1, yCoord1, xCoord2, yCoord2} = form
        setLabels(rectQuery({
            x1: Number(xCoord1.value),
            y1: Number(yCoord1.value),
            x2: Number(xCoord2.value),
            y2: Number(yCoord2.value)
        }, points))
    }

    return (
        <div className={classes.query}>
            <form className={classes.points} onSubmit={submitHandler}>
                <div className={classes.input}>
                    <label className={classes.label}>first point</label>
                    <AppInput type="number" name="xCoord1" value={x1.value} onChange={x1.changeHandler}/>
                    <AppInput type="number" name="yCoord1" value={y1.value} onChange={y1.changeHandler}/>
                </div>
                <div className={classes.input}>
                    <label className={classes.label}>second point</label>
                    <AppInput type="number" name="xCoord2" value={x2.value} onChange={x2.changeHandler}/>
                    <AppInput type="number" name="yCoord2" value={y2.value} onChange={y2.changeHandler}/>
                </div>
                <AppButton type="submit" extendedClass={classes.button}>Make Query</AppButton>
            </form>
            <div className={classes.result}>
                {labels.map( label => (
                    <LabelItem label={label}/>
                ))}
            </div>
        </div>
    );
};

export default RectangleQuery;