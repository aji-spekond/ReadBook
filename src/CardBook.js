import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function CardBook(){
    let CardBook=["RichDAd","ikia","DEep Soul","Stranger things","Rise Emperor","Akia","Education"];
    
  return (
         <div className = "container">
           <div className = "row">
             {CardBook.map((CardBook)=>{
              return(
                <div className="col-lg-3 p-2">
                <div class = "card">
                  <div className='card-header bg-danger'>
                    <h3 className='text-center text-white'>{CardBook}</h3>
                  </div>
          <img
               src='Booklist.jpeg'
               class = " card- img-top "
               alt = " ..."
               height = "100px"/>
    
        <div class = "card-body">
         <div class = " card-title"> 
         <p class = " card-text " >
            Richiee world create by 1972
           </p>
           <a href="#" class="btn btn-primary">
             Read Book
            </a> 
              </div>
            </div>
            </div>           
            </div>
            
              )
             })
             
             }
             </div>
             </div>
)
};

export default CardBook;