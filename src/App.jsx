import React, { useState } from "react";
import Todolists from "./Todolists";
const App=()=>{
const[inputlist,setinputlist]=useState("");
const[items,setitems]=useState([]);
const itemevent=(event)=>{
setinputlist(event.target.value);
};
const listofitems=()=>{
setitems((oldtimes)=>{
    return [...oldtimes,inputlist];
});
setinputlist("");
};

const deleteItems=(id)=>{
    console.log("deleted");
    setitems((oldtimes)=>{
        return oldtimes.filter((arrelem,index)=>{
         return index !== id;
        });
    });
};


return(
    <>
    <div className="main_div">
     <div className="center_div">
    <br/>
    <h1> ToDo List</h1>
    <br/>
    <input type="text" placeholder="Add Items"
    value={inputlist}
     onChange={itemevent}/>
    <button onClick={listofitems}> +</button>
    <ol>
    {
       items.map((itemval,index)=>{
        return <Todolists key={index} id={index} text={itemval} onSelect={deleteItems}

        />;
       }) 
    }
    </ol>

     </div>
    </div>       
    </>
);
};
export default App;