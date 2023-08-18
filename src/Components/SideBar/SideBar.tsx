import React, {FC, ReactNode} from 'react';
import classes from './SideBar.module.css'
import AppButton from "../ui/button/AppButton";

interface SideBarProps {
    isOpened: boolean
    onToggle: () => void
    children: ReactNode
}
const SideBar: FC<SideBarProps> = ({isOpened, onToggle, children}) => {
    return (
        <div
            className={isOpened ? [classes.sidebar, classes.open].join(' ') : classes.sidebar}
        >
            <AppButton type="button" onClick={onToggle}>Toggle sidebar</AppButton>
            {isOpened && children}
        </div>
    );
};

export default SideBar;