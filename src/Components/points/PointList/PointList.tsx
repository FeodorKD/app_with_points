import React, {FC, useEffect} from 'react';
import {IPoints} from "../../../types/dataTypes";
import PointItem from "../PointItem/PointItem";

interface ListProps {
    points: IPoints[]
}

const PointList: FC<ListProps> = ({points}) => {

    return (
        <div>
            {points?.map((point: IPoints) =>
                <PointItem
                    key={point.id}
                    id={point.id}
                    name={point.name}
                    coordinate={point.coordinate}
                    labels={point.labels}
                />
            )}
        </div>
    );
};

export default PointList;