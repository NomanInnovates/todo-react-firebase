import firebase from 'firebase'
import './TodoPage.css';
import {useState,useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {db} from '../config/firebase'
import TodoList from '../components/TodoList'


function TodoPage() {
  const [todos,setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')
  useEffect(() => {
      
    getTodos();
  }, [])
  const getTodos =  ()=>{
    db.collection('todo').onSnapshot(function(querySnapshot){
      setTodos(
      querySnapshot.docs.map((doc)=>({ 
        id :doc.id,
        todo :  doc.data().todo,
        inprogress : doc.data().inprogress
      })))
    })
    console.log("get");

  }
  const addToDo =  (e)=>{
    e.preventDefault();
    db.collection('todo').add({
      inprogress:true, timeStamp : firebase.firestore.FieldValue.serverTimestamp(),
      todo:todoInput
    })
    setTodoInput('')
  // console.log(todoInput)
}
  return (
    <div className="App">
     <h1>Noman </h1>
    <form>
     <TextField id="standard-basic" onChange={(e)=>setTodoInput(e.target.value)} value={todoInput} label="Write Todo" />
     <Button type="submit" variant="contained" onClick={addToDo} >Add Todo</Button>
     {/* style = {display:'none'} */}
     </form>
     {todos.map((item) => (
    <TodoList todo={item.todo} inprogress={item.inprogress} id={item.id} />) )}
    </div>
  );
}

export default TodoPage;
