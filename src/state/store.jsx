const ADD_TASK = 'ADD_TASK'
const UPDATE_INPUT = 'UPDATE_INPUT'
const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME'
const DELETE_TASK = 'DELETE_TASK'

let state = {
    store:{
        task: [
            // {id: 1, text: "Первая задача", done: false},
            // {id: 2, text: "Вторая задача", done: false},
            // {id: 3, text: "Третья задача", done: false},
        ],
        newTask: ''   
    },

    rerenderTree(){
        console.log(1);
    },

    subscribe(f){
        this.rerenderTree = f
    },

    dispatch(action){     
         
        if(action.type === ADD_TASK){
            if(this.store.newTask === '')
                return
            
            let newTask = {
                id: maxId(this.store),
                text: this.store.newTask,
                done: 'nonactive'
            }
            
            this.store.task.push(newTask)
            this.store.newTask = ''
            this.rerenderTree()
        }
        else if(action.type === UPDATE_INPUT){
            this.store.newTask = action.newTesk
            this.rerenderTree()
        }
        else if(action.type === UPDATE_TASK_NAME){
            for(let txt in this.store.task){
                if(this.store.task[txt].id === action.idTask){
                    this.store.task[txt].done = action.done;
                }
            }
            this.rerenderTree();
        } 
        else if(action.type === DELETE_TASK){
            for(let d in this.store.task){
                if(this.store.task[d].id === action.idTask){
                    this.store.task.splice(d, 1);
                }
            }
            this.rerenderTree();
        }
    }
}

export const addTask = () => {
    return{
        type: ADD_TASK
    }
}

export const updateTask = (text) => {
    return{
        type: UPDATE_INPUT,
        newTesk: text
    }
}

export const addClassNameTask = (idTask, activeState) => {
    return{
        type: UPDATE_TASK_NAME,
        idTask: idTask,
        done: activeState
    }
}

export const deleteTask = (id) => {
    return{
        type: DELETE_TASK,
        idTask: id
    }
}

export let maxId = (store) => {
    
    
    if(store.task.length === 0){
        return 0
    } 

    
    let max = 0
    for(let i in store.task){
        if(store.task[i].id > max){
            max = store.task[i].id;
        }
    }
    return max + 1;
}

export default state;