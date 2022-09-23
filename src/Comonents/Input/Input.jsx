import classes from './Input.module.css'
import { addTask, updateTask } from '../../state/store'
import { useKeyPress } from '../hooks/useKeyPress'
import React from 'react'



export function Input(props){

    const ref = React.createRef()
    
    let addNewTask = () => {
        props.dispatch(addTask())
    }

    let updateInput = () => {
        let text = ref.current.value
        props.dispatch(updateTask(text))
    }

    useKeyPress('Enter', addNewTask)

    return(
        <div className={classes.wrapper}>
            <div className={classes.wrapper_area} >
                <input className={classes.input} type="text" placeholder='Enter your task' maxLength='30' value={props.newText} onChange={updateInput} ref={ref}/>
                <button className={classes.button} onClick = {addNewTask}>+ Add task</button>
            </div>
        </div>
    )
}