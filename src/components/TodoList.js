import { Button, ListItem, ListItemText } from "@material-ui/core";
import "./TodoList.css";
import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import CreateIcon from "@material-ui/icons/Create";
import useTodoList from "./useTodoList";

function TodoList({ todo, inprogress, id }) {
  const [uctaDone, ctaDone, ctaDelete] = useTodoList();
  return (
    <div className="todo-container">
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "inprogress" : "completed"}
        />
        <Button
          color="secondary"
          variant="contained"
          onClick={() => ctaDone(id, inprogress)} >
          <DoneOutlineIcon />
        </Button>
        <Button variant="contained" onClick={() => uctaDone(id, todo)}>
          <CreateIcon />
        </Button>

        <Button variant="contained" onClick={() => ctaDelete(id)}>
        
          <DeleteForeverIcon />
        </Button>
      </ListItem>
    </div>
  );
}

export default TodoList;
