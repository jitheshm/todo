import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
function RowData({toDos,passComponent,currentStatus,currentSecStatus,colour,id}) {
    
  return (
  
    <Droppable droppableId={id} key={id} >
    {(provided, snapshot) => (
    <div id={String(currentStatus)} className={`col-md-3 ${snapshot.isDraggingOver? 'border border-danger':''} ${colour} px-0 m-1`} 
    ref={provided.innerRef}
      //style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey'  }}
      {...provided.droppableProps}>
                <div>
                  <h4 className="ms-2">{currentStatus}</h4>
                </div>
                <div className="mt-2">

                {
                  toDos.map((obj,index)=>{
                    if(obj.status===String(currentStatus)||obj.status===String(currentSecStatus)){
                     // console.log(obj);
                  return(
                    passComponent(obj,index)
                  )}
                  else{
                    return(null)
                  }
                  })
                }     
                {provided.placeholder}


                </div>
              </div>)}
              </Droppable>
             
  )
}

export default RowData