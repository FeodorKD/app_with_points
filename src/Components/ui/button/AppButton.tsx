import React, {FC, ReactNode} from 'react';
import classes from './AppButton.module.css'

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type: 'submit' | 'button',
    children: ReactNode,
    extendedClass?: string
}
const AppButton: FC<IButtonProps> = ({children, extendedClass, ...attributes}) => {
    return (
        <button className={extendedClass ? [classes.button, extendedClass].join(' ') : classes.button} {...attributes}>
            {children}
        </button>
    );
};

export default AppButton;