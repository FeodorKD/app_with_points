import React, {FC, useEffect, useRef} from 'react';
import classes from "./Canvas.module.css"
import {IPoints} from "../../types/dataTypes";


interface CanvasProps {
    points: IPoints[]
}
const AppCanvas: FC<CanvasProps> = ({points}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>()

    useEffect(() => {

        const canvas = canvasRef.current
        const xOffset = canvas.width/2
        const yOffset = canvas.height/2
        const canvasContext = canvas.getContext("2d")
        points.forEach((point) => {
            canvasContext.beginPath()
            canvasContext.arc(point.coordinate[0] + xOffset, point.coordinate[1] + yOffset, 4, 0, 2*Math.PI)
            canvasContext.fillStyle = 'red'
            canvasContext.fill()
            canvasContext.closePath()
        })
    }, [])

    return (
        <canvas
            className={classes.canvas}
            ref={canvasRef}
            width={800}
            height={600}
        >
            Sorry, your browser not available with canvas
        </canvas>
    );
};

export default AppCanvas;