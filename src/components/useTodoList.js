import React from 'react' 
import {db} from '../config/firebase'


const ctaDelete = (id) => {
    db.collection('todo').doc(id).delete()
}
const ctaDone = (id,inprogress) => {
    db.collection('todo').doc(id).update({
        inprogress: !inprogress,
    })
}
const uctaDone = (id,todo) => {
    // alert('todo')
    var updatedTodo = window.prompt("Enter New Todo",todo);
    console.log("update",updatedTodo)
    db.collection('todo').doc(id).update({ todo:updatedTodo})
}
function useTodoList() {
    return [uctaDone,ctaDone,ctaDelete]
}

export default useTodoList;
