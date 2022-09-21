import classes from './Input.module.css'
import { addTask, updateTask } from '../../state/store'
import React from 'react'

const ref = React.createRef()

export function Input(props){
    
    let addNewTask = () => {
        props.dispatch(addTask())
    }

    let updateInput = () => {
        let text = ref.current.value
        props.dispatch(updateTask(text))
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.wrapper_area}>
                <input className={classes.input} type="text" placeholder='Enter your task' value={props.newText.newText} onChange={updateInput} ref={ref}/>
                <button className={classes.button} onClick = {addNewTask}>+ Add task</button>
            </div>
        </div>
    )
}