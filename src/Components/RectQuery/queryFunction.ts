import {IPoints} from "../../types/dataTypes";


interface queryObj {
    x1: number
    y1: number
    x2: number
    y2: number
}

export const rectQuery = (pointsCoordinates: queryObj, points: IPoints[]): string[] => {
    const result: Set<string> = new Set()
    points.forEach( point => {
        const x = point.coordinate[0]
        const y = point.coordinate[1]
        if(pointsCoordinates.x1 < x && pointsCoordinates.x2 > x && pointsCoordinates.y1 < y && pointsCoordinates.y2 > y) {
            point.labels.forEach( label => {
                result.add(label)
            })
        }
    })

    return Array.from(result)
}