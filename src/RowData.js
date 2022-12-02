import React from 'react'

function RowData({toDos,passComponent,currentStatus,currentSecStatus,colour}) {
    
  return (
    <div id={String(currentStatus)} className={`col-md-3 ${colour} px-0 m-1`} style={{minHeight: '200px'}}>
                <div>
                  <h4 className="ms-2">{currentStatus}</h4>
                </div>
                <div className="mt-2">

                {
                  toDos.map((obj)=>{
                    if(obj.status===String(currentStatus)||obj.status===String(currentSecStatus)){
                     // console.log(obj);
                  return(
                    passComponent(obj)
                  )}
                  else{
                    return(null)
                  }
                  })
                }     



                </div>
              </div>
  )
}

export default RowData