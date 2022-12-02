import React from 'react'

function Header({toDos,setTodos,toDo,setTodo}) {
    let currentDay=new Date().toLocaleDateString('en-us', { weekday:"long"})
  return (
    <div>
    <div className="mt-2">
      <h1 className="text-center text-warning">ToDo List</h1>
    </div>


    <div>
      <h5 className="text-center text-light">Hey, it's {currentDay}</h5>
    </div>


    <div className="d-flex justify-content-center">
      <div className="text-start bg-white border rounded col-6" style={{height: '44px'}}>
        <input value={toDo} onChange={(e)=>{setTodo(e.target.value)}} type="text" className="col-8 my-2 ms-1 border-0 shadow-none" style={{outline:"none"}} placeholder="Plan something....." />
        <i onClick={()=>{
           let date=new Date().toLocaleDateString();
          setTodos([...toDos,{data:toDo,date:date,status:"Todo",id:Date.now()}])}}
         
           className="fas fa-plus text-end float-end mt-2 me-3" style={{fontSize: '22px'}} /></div>
    </div>
  </div>
  )
}

export default Header