import './App.css';
import {Input} from './Comonents/Input/Input';
import {Task} from './Comonents/Tasks/Task'

function App(props) {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Input newText = {props.state.store} dispatch={props.dispatch}/>
      <hr />
      <Task task={props.state.store} />
    </div>
  );
}

export default App;
