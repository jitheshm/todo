import React,{ useState } from "react";



function App() {
const [toDos,setTodos]=useState([]);
const [toDo,setTodo]=useState('');
let currentDay=new Date().toLocaleDateString('en-us', { weekday:"long"})

  return (
        <section className="container-fluid">
            <div>
              <div className="mt-2">
                <h1 className="text-center text-warning">ToDo List</h1>
              </div>


              <div>
                <h5 className="text-center text-light">Hey, it's {currentDay}</h5>
              </div>


              <div className="d-flex justify-content-center">
                <div className="text-start bg-white border rounded col-6" style={{height: '44px'}}>
                  <input value={toDo} onChange={(e)=>{setTodo(e.target.value)}} type="text" className="col-10 my-2 ms-1" style={{borderStyle: 'hidden'}} placeholder="Plan something....." />
                  <i onClick={()=>{
                     let date=new Date().toLocaleDateString();
                    setTodos([...toDos,{data:toDo,date:date,status:"todo",id:Date.now()}])}}
                   
                     className="fas fa-plus text-end float-end mt-2 me-3" style={{fontSize: '22px'}} /></div>
              </div>
            </div>
            <div className="row mt-4 mx-3 justify-content-center">
              <div id="todo" className="col-md-3 bg-info px-0 m-1" style={{minHeight: '200px'}}>
                <div>
                  <h4 className="ms-2">ToDo</h4>
                </div>
                <div className="mt-2">

                {
                  toDos.map((obj)=>{
                    if(obj.status==="todo"){

                  return(
                  <div className="border rounded bg-white mx-4 mb-4" style={{minHeight: '33px', boxShadow: '1px 1px 5px 0px rgb(44,49,52)'}} name="looping div">
                    <div>
                      <i onClick={()=>{
                        setTodos(
                        toDos.filter((value)=>{
                          if(obj.id===value.id){
                            value.status="progress"
                            value.date=new Date().toLocaleDateString();
                            
                          }
                          return value;
                         
                          
                        }))
                      }} className="fas fa-arrow-right text-success d-flex d-md-flex justify-content-end justify-content-md-end" />
                      </div>
                    <div>
                      <p style={{overflowWrap: 'break-word'}}>{obj.data} </p>
                    </div>
                    <div className="row"><span className="fs-6 fw-lighter d-lg-flex justify-content-lg-start align-items-lg-end col-6">{obj.date}</span>
                    <i onClick={()=>{
                      setTodos(toDos.filter((value)=>{
                       if(value.id===obj.id)
                       {
                        value.status="cancelled"
                        value.date=new Date().toLocaleDateString();
                       }
                       return value
                      }))
                    }} className="fas fa-times text-danger d-flex d-md-flex justify-content-end justify-content-md-end col-6" /></div>
                  </div>
                  )}
                  else{
                    return(null)
                  }
                  })
                }     



                </div>
              </div>
              <div id="progress" className="col-md-3 bg-warning px-0 m-1" style={{minHeight: '200px'}}>
                <div>
                  <h4 className="ms-2">Progress</h4>
                </div>
                <div className="mt-2">

                 {
                  toDos.map((obj)=>{
                  if(obj.status==="progress")
                  {
                    return(
                  <div className="border rounded bg-white mx-4 mb-4" style={{minHeight: '33px', boxShadow: '1px 1px 5px rgb(44,49,52)'}} name="looping div">
                    <div><i onClick={()=>{
                        setTodos(
                        toDos.filter((value)=>{
                          if(obj.id===value.id){
                            value.status="completed"
                            value.date=new Date().toLocaleDateString();
                            
                          }
                          return value;
                          
                         
                          
                        }))
                      }} 
                    className="fas fa-arrow-right text-success d-flex d-md-flex justify-content-end justify-content-md-end" /></div>
                    <div>
                      <p style={{overflowWrap: 'break-word'}}>{obj.data}</p>
                    </div>
                    <div className="row"><span className="fs-6 fw-lighter d-lg-flex justify-content-lg-start align-items-lg-end col-6">{obj.date}</span>
                    <i 
                    onClick={()=>{
                      setTodos(toDos.filter((value)=>{
                       if(value.id===obj.id)
                       {
                        value.status="cancelled"
                        value.date=new Date().toLocaleDateString();
                       }
                       return value
                      }))
                    }}
                     className="fas fa-times text-danger d-flex d-md-flex justify-content-end justify-content-md-end col-6" /></div>
                  </div>
                    )
                  }
                  else
                  return null
                  })}



                </div>
              </div>
              <div id="complete" className="col-md-3 bg-success px-0 m-1" style={{minHeight: '200px'}}>
                <div>
                  <h4 className="ms-2">Completed</h4>
                </div>
                <div className="mt-2">


                  {
                    toDos.map((obj)=>{
                      if(obj.status==="completed" || obj.status==="cancelled")
                      {
                      return(
                        <div className="border rounded bg-white mx-4 mb-4" style={{minHeight: '33px', boxShadow: '1px 1px 5px rgb(44,49,52)'}} name="looping div">
                    <div>
                    <p style={{overflowWrap: 'break-word'}}>
                   { obj.status==="completed" &&
                   <span>{obj.data}</span> 
                   }
                   { obj.status==="cancelled" &&
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
                      )}
                      else
                      return null
                    })
                  
                  }



                </div>
              </div>
              

            </div>
            
          </section>
        
      
    
  );
}

export default App;
