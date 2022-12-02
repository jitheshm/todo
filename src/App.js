import React,{ useState } from "react";
import CompleteList from "./CompleteList";
import DataList from "./DataList";
import Header from "./Header";
import RowData from "./RowData";



function App() {
const [toDos,setTodos]=useState([]);
const [toDo,setTodo]=useState('');


  return (
        <section className="container-fluid">
            <Header toDos={toDos} setTodos={setTodos} toDo={toDo} setTodo={setTodo} />
            <div className="row mt-4 mx-3 justify-content-center">
              <RowData toDos={toDos} passComponent={(obj)=><DataList obj={obj}  toDos={toDos} setTodos={setTodos}  newStatus="Progress" />} currentStatus="Todo" colour="bg-info" />
              <RowData toDos={toDos} passComponent={(obj)=><DataList obj={obj}  toDos={toDos} setTodos={setTodos}  newStatus="Completed" />} currentStatus="Progress" colour="bg-warning"/>
              <RowData toDos={toDos} passComponent={(obj)=><CompleteList obj={obj}  toDos={toDos} setTodos={setTodos}  />} currentStatus="Completed" currentSecStatus="Cancelled" colour="bg-success" />
            </div>
            
          </section>
        
      
    
  );
}

export default App;
