import c from './MyTask.module.css'

export function MyTask(props){
    return(
        <div className={c.task}>
        <label className={c.container}>
            <input className={c.task__checkbox} type="checkbox" />
            <span className={c.task__choseImg}></span>
        </label>
        <span className={c.nameTask}>{props.text}</span>
    </div>
    )
}