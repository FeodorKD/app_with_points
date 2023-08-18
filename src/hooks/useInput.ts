import {ChangeEventHandler, useState} from "react";
type InputValue = string | number
interface UseInputResult {
    value: InputValue,
    changeHandler: ChangeEventHandler<HTMLInputElement>
}

export const useInput = (initialValue : InputValue): UseInputResult => {
    const [value, setValue] = useState<InputValue>(initialValue)
    const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
    }
    return {
        value,
        changeHandler
    }
}