import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import AppForm from "../../Components/ui/Form/AppForm";
import {useActions} from "../../hooks/useActions";
import classes from './PointPage.module.css'
import AppButton from "../../Components/ui/button/AppButton";
import {useNavigate} from "react-router";
import {IPoints} from "../../types/dataTypes";
const PointPage: FC = () => {
    const {id} = useParams()
    const {point, loading, error} = useTypedSelector(state => state.onePoint)
    const {fetchOnePoint, putOnePoint} = useActions()
    const navigate = useNavigate()
    const backHandler = (): void => {
        navigate(-1)
    }

    const editPoint = (point: IPoints) => {
        putOnePoint(point)
    }

    useEffect(() => {
        fetchOnePoint(Number(id))
    }, [])

    if(loading) {
        return (
            <div className={classes.container}>Fetching data...</div>
        )
    }

    if(error) {
        return (
            <div className={classes.container}>{error}</div>
        )
    }

    return (
        <div className={classes.container}>
            <h2>{`It's page of ${id} point`}</h2>
            <AppForm point={point} submitFunction={editPoint}/>
            <AppButton type="button" onClick={backHandler}>Back</AppButton>
        </div>
    );
};

export default PointPage;