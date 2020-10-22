import React, {useState, useContext} from "react";
import {AlertContext} from "../../Context/alert/alertContext";

export const Form = () => {

    const [value, setValue] =useState('')
    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            alert.show('Task was created', 'success')
            setValue('')
        } else {
            alert.show('Create task')
        }
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter task-name"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}