import React,{ useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import CompleteList from "./CompleteList";
import DataList from "./DataList";
import Header from "./Header";
import RowData from "./RowData";




function App() {
const [toDos,setTodos]=useState([]);
const [toDo,setTodo]=useState('');
let onDragEnd=(result)=>{
if(result.destination)
{
   let startIndex=result.source.index
   let dropId=result.destination.droppableId
  setTodos(toDos.filter((val,index)=>{
    if(index===startIndex)
    {
      val.status=String(dropId);
      val.date=new Date().toLocaleDateString();
    }
    
      return val
  }))}
}

  return (
        <section className="container-fluid">
            <Header toDos={toDos} setTodos={setTodos} toDo={toDo} setTodo={setTodo} />
            <div className="row mt-4 mx-3 justify-content-center">
            <DragDropContext onDragEnd={onDragEnd}>
              <RowData toDos={toDos} passComponent={(obj,index)=><DataList obj={obj}  toDos={toDos} setTodos={setTodos}  id={index}/>} currentStatus="Todo" colour="bg-info" id="Todo" />
              <RowData toDos={toDos} passComponent={(obj,index)=><DataList obj={obj}  toDos={toDos} setTodos={setTodos}  id={index} />} currentStatus="Progress" colour="bg-warning" id="Progress"/>
              <RowData toDos={toDos} passComponent={(obj,index)=><CompleteList obj={obj}  toDos={toDos} setTodos={setTodos} id={index} />} currentStatus="Completed" currentSecStatus="Cancelled" colour="bg-success" id="Completed" />
              </DragDropContext>
            </div>
            
          </section>
        
      
    
  );
}

export default App;
