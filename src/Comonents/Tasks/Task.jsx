import c from './Task.module.css'
import { MyTask } from './Tasks/MyTask'


export function Task(props){

    let listTask = props.task.task.map(el => <MyTask text={el.text} />)

    return(
        <div className={c.wrapper}>
            <div className={c.tasks}>
                {listTask}
            </div>
        </div>
    )
    
}