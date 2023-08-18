import React, {useEffect, useState} from 'react';
import AppCanvas from "../../Components/AppCanvas/AppCanvas";
import classes from "./CanvasPage.module.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import SideBar from "../../Components/SideBar/SideBar";
import RectangleQuery from "../../Components/RectQuery/RectangleQuery";
const CanvasPage = () => {
    const [isSideBarOpened, setIsSideBarOpened] = useState<boolean>(false)
    const toggleSideBar = () => {
        setIsSideBarOpened(prevState => !prevState)
    }
    const {loading, error, points} = useTypedSelector(state => state.points)
    const {fetchPoints} = useActions()
    useEffect(() => {
        fetchPoints()
    }, [])

    if(loading){
        return <div>Loading..</div>
    }
    if(error){
        return <div>{error}</div>
    }
    return (
        <>
            <div className={classes.container}>
                <AppCanvas points={points}/>
            </div>
            <SideBar isOpened={isSideBarOpened} onToggle={toggleSideBar}>
                <RectangleQuery points={points}/>
            </SideBar>
        </>
    );
};

export default CanvasPage;