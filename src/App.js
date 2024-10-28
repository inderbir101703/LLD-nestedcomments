import { useState } from "react";

import Comments from "./components/comments";
function App() {
  const [comments,setComments]=useState([])
  const [newCommentValue,setNewCommentValue]=useState('')

  const addSubComment=(id,comments,newComment)=>{

   return  comments.map((comment)=>{
      if(comment.id===id){
        return {...comment,
           subComments: [...comment.subComments,...newComment]  
        }
        
      }
      else if(comment?.subComments?.length>0){
        return {...comment,
        subComments:addSubComment(id,comment?.subComments,newComment)}
      }
      return comment
    })

  }
  const updateComments=(commentId,newComment)=>{
  setComments((prevComments)=>addSubComment(commentId,prevComments,newComment))
  }

  const handleSubmit=(e)=>{
 e.preventDefault()
  setComments((prev)=>[...prev,{id:Date.now().toString() ,body:newCommentValue ,subComments:[]}] )
  setNewCommentValue('')
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="addComment">Add a comment</label>
        <input type="text" required value={newCommentValue} onChange={(e)=>{setNewCommentValue(e.target.value)}} />
        <button type="submit">Submit</button>
      </form>
    {comments.map((comment)=><Comments key={comment.id} {...comment} updateComments={updateComments} />)}
    </div>
  );
}

export default App;
