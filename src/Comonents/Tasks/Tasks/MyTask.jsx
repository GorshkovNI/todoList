import './MyTask.css'
import React, { useState } from 'react'
import { addClassNameTask, deleteTask } from '../../../state/store'

export function MyTask(props){


    const linkCheckbox = React.createRef();
    const [activeState, setActiveState] = useState(false);

    let isChecked = (event) =>{
        let isFlag = event.target.checked;
        isFlag ? setActiveState('active') : setActiveState('');
        props.dispatch(addClassNameTask(props.text, isFlag));
    }

    let deleteCurrentTask = () => {
        props.dispatch(deleteTask(props.id));
    }

    return(
        <div className={`task ${activeState}`}>
            <label className='container'>
                <input className='task__checkbox' type="checkbox" id={props.id} onChange={isChecked} ref={linkCheckbox}/>
            </label>
            <svg className='task__Img' onClick={deleteCurrentTask} viewBox="0 0 16 16" fill="none" stroke="#8055FF" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5" fill="none" stroke-linecap="round"/>
                    <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round"/>
                </svg>
            <span className='nameTask'>{props.text}</span>
        </div>
    )
}