import React, {FC} from 'react';
import classes from './LabelItem.module.css'
interface ItemProps {
    label: string
}
const LabelItem: FC<ItemProps> = ({label}) => {
    return (
        <div className={classes.label}>
            {label}
        </div>
    );
};

export default LabelItem;