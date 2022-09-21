const ADD_TASK = 'ADD_TASK'
const UPDATE_INPUT = 'UPDATE_INPUT'

let state = {
    store:{
        task: [
            {id: 1, text: "Первая задача"},
            {id: 2, text: "Вторая задача"},
            {id: 3, text: "Третья задача"},
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
            let newTask = {
                id: 4,
                text: this.store.newTask
            }
            this.store.task.push(newTask)
            this.rerenderTree()
        }
        if(action.type === UPDATE_INPUT){
            this.store.newTask = action.newTask
            this.rerenderTree()
        } 
    }
}

export let addTask = () => {
    return{
        type: ADD_TASK
    }
}

export let updateTask = (text) => {
    return{
        type: UPDATE_INPUT,
        newTask: text
    }
}

export default state;