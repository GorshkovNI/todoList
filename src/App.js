import './App.css';
import {Input} from './Comonents/Input/Input';
import {Task} from './Comonents/Tasks/Task'

function App(props) {
  return (
    <div className="App">
      <h1 className='title'>TODO LIST</h1>
      <Input newText = {props.state.store.newTask} dispatch={props.dispatch}/>
      <hr />
      <Task task={props.state.store} dispatch={props.dispatch} />
    </div>
  );
}

export default App;
