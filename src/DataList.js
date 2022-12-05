import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

function DataList({obj,toDos,setTodos,id}) {
    // console.log(obj);
  return (
    <Draggable key={`drag${id}`} draggableId={`drag${id}`} index={id}>
      {(provided, snapshot) => (
    <div className="border rounded bg-white mx-4 mb-4" style={{minHeight: '33px', boxShadow: '1px 1px 5px 0px rgb(44,49,52)'}} name="looping div"
    ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}>
                    
                    <div>
                      <p style={{overflowWrap: 'break-word'}}> {obj.data} </p>
                    </div>
                    <div className="row"><span className="fs-6 fw-lighter d-lg-flex justify-content-lg-start align-items-lg-end col-6">{obj.date}</span>
                    <i onClick={()=>{
                      setTodos(toDos.filter((value)=>{
                       if(value.id===obj.id)
                       {
                        value.status="Cancelled"
                        value.date=new Date().toLocaleDateString();
                       }
                       return value
                      }))
                    }} className="fas fa-times text-danger d-flex d-md-flex justify-content-end justify-content-md-end col-6" /></div>
                  </div>)}
                  </Draggable>
  )
}

export default DataList