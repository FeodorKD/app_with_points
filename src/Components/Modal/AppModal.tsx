import React, {FC} from 'react';
import classes from "./AppModal.module.css";
import {createPortal} from "react-dom";
import Context from "react-redux/src/components/Context";



interface ModalProps {
    children: React.ReactNode
    isOpened: boolean
    onClose: () => void
}

const AppModal: FC<ModalProps> = ({children, isOpened, onClose}) => {
    const modalClassName = (): string => {
        if (isOpened) {
            return [classes.modal, classes.opened].join(' ')
        } else {
            return classes.modal
        }
    }
    const contentClickHandler = (event: React.MouseEvent) => {
        event.stopPropagation()
    }
    return (
        createPortal(<div className={modalClassName()}>
                        <div className={classes.background} onClick={onClose}>
                            <div className={classes.content} onClick={contentClickHandler}>
                                {children}
                            </div>
                        </div>
                    </div>, document.getElementById('modal') as HTMLElement)
    );
};




export default AppModal;