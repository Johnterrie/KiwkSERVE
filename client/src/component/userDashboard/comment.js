import React, {useState} from "react";
import Topbar from "./Top";


function Comment({user}) {
  const [search, setSearch] = useState("");
    return (
      <div className="App">
      <div className="main">
        <div className="main-bar">

         <Topbar user={user}/>

          <div class="page">
            <div>
              <textarea placeholder="Type in Comment" className="comment"
              onChange={(e) => 
                setSearch(e.target.value)} value={search}
                 ></textarea>
              <button className="submit" onClick={(e) => alert("Comment Recieved")} >Submit</button>
            </div>
            </div>
         
        </div>
        
      </div>
    </div>
    );
  }
  
  export default Comment;
  