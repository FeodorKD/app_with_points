import React, {FC, useState} from 'react';
import AppInput from "../Input/AppInput";
import classes from './AppForm.module.css'
import {IPoints} from "../../../types/dataTypes";
import AppButton from "../button/AppButton";
import {useInput} from "../../../hooks/useInput";

interface IFormProps {
    point?: IPoints;
    submitFunction: (point: IPoints) => void
}

type FormFields = {
    name: HTMLInputElement,
    firstCoordinate: HTMLInputElement,
    secondCoordinate: HTMLInputElement,
    labels: HTMLInputElement,
}
const AppForm: FC<IFormProps> = ({point, submitFunction}) => {

    const [labelsError, setLabelsError] = useState<boolean>(false)
    const nameInput = useInput(!point ? '' : point.name);
    const firstCoordInput = useInput(!point ? 0 : point.coordinate[0]);
    const secondCoordInput = useInput(!point ? 0 : point.coordinate[1]);
    const labelsInput = useInput(!point ? '' : point.labels.join(' '));


    const submitHandler: React.FormEventHandler<HTMLFormElement & FormFields> = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const regexp = /^\s*\w+(\s+\w+)*\s*$/
        const {name, labels, firstCoordinate, secondCoordinate} = form
        if (regexp.test(labels.value)) {
            setLabelsError(false)
            const pointId = !point ? Number(Date.now()) : point.id
            submitFunction({
                id: pointId,
                name: name.value,
                coordinate: [Number(firstCoordinate.value), Number(secondCoordinate.value)],
                labels: labels.value.split(' ')
            })
        } else {
            setLabelsError(true)
        }

    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.name}>
                <AppInput
                    type={'text'}
                    name={'name'}
                    value={nameInput.value}
                    onChange={nameInput.changeHandler}
                />
            </div>
            <div className={classes.coordinates}>
                <AppInput
                    type={'number'}
                    name={'firstCoordinate'}
                    value={firstCoordInput.value}
                    onChange={firstCoordInput.changeHandler}
                />
                <AppInput
                    type={'number'}
                    name={'secondCoordinate'}
                    value={secondCoordInput.value}
                    onChange={secondCoordInput.changeHandler}
                />
            </div>
            <div className={classes.labels}>
                {labelsError && <div className={classes.error}>Please split labels with 'space' separator</div>}
                <AppInput
                    type={'text'}
                    name={'labels'}
                    value={labelsInput.value}
                    onChange={labelsInput.changeHandler}
                />
            </div>
            <AppButton type={'submit'} >Save Point Data</AppButton>
        </form>
    );
};

export default AppForm;