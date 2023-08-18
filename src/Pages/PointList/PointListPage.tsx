import React, {FC, useEffect, useState} from 'react';
import PointList from "../../Components/points/PointList/PointList";
import AppButton from "../../Components/ui/button/AppButton";
import AppModal from "../../Components/Modal/AppModal";
import AppForm from "../../Components/ui/Form/AppForm";
import {IPoints} from "../../types/dataTypes";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import classes from "./PointListPage.module.css"

const PointListPage: FC = () => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false)
    const {points, loading, error} = useTypedSelector(state => state.points)
    const {fetchPoints, postOnePoint} = useActions()
    useEffect(()=>{
        fetchPoints()
    }, [])

    const closeHandler = () => {
        setIsModalOpened(false)
    }

    const addPoint = (point: IPoints) => {
        postOnePoint(point)
        fetchPoints()
        setIsModalOpened(false)
    }

    if(loading) {
        return (
            <div>Fetching data...</div>
        )
    }

    if(error) {
        return (
            <div>{error}</div>
        )
    }

    return (
        <div >
            <AppModal isOpened={isModalOpened} onClose={closeHandler}>
                <AppForm  submitFunction={addPoint} />
            </AppModal>
            <AppButton type="button" onClick={() => setIsModalOpened(true)}>Add Point</AppButton>
            <PointList points={points}/>
        </div>
    );
};

export default PointListPage;