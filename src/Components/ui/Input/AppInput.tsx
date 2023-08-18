import React, {FC, ForwardedRef, InputHTMLAttributes} from 'react';
interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: string,
    name: string,
}
const AppInput: FC<IInputProps> = (props) => {

    return (
        <input {...props}>

        </input>
    );
};

export default AppInput;