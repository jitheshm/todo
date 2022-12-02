import React from 'react'

function CompleteList({obj,toDos,setTodos}) {
  console.log(obj);
  return (
    <div className="border rounded bg-white mx-4 mb-4" style={{minHeight: '33px', boxShadow: '1px 1px 5px rgb(44,49,52)'}} name="looping div">
    <div>
    <p style={{overflowWrap: 'break-word'}}>
   { obj.status==="Completed" &&
   <span>{obj.data}</span> 
   }
   { obj.status==="Cancelled" &&
    <span style={{textDecoration: 'line-through',color: 'rgb(230, 9, 9)'}}>{obj.data}</span> 
   }
   </p>

    </div>
    <div className="row"><span className="fs-6 fw-lighter d-lg-flex justify-content-lg-start align-items-lg-end col-6">{obj.date}</span>
    <i onClick={()=>{
      if (window.confirm('Are you sure ?')) {
        setTodos(toDos.filter((value)=>{
           return value.id!==obj.id
        }))
         
       }
     }
    } className="far fa-trash-alt text-danger d-flex d-md-flex justify-content-end justify-content-md-end col-6" /></div>
  </div>
  )
}

export default CompleteList