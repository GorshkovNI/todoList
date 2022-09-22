import c from './Task.module.css'
import { MyTask } from './Tasks/MyTask'

export function Task(props){

    let listTask = props.task.task.map(el => <MyTask id={el.id} text={el.text} dispatch = {props.dispatch}/>)

    return(
        <div className={c.wrapper}>
            <div className={c.tasks}>
                {listTask}
            </div>
        </div>
    )
    
}