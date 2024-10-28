import { useState } from 'react'
import './comments.css'
const Comments=({id,body,subComments,updateComments})=>{
    const [subCommentValue,setSubCommentValue]=useState('')
  const addComment=(e)=>{

    if(subCommentValue=='')
    {
        alert('can not be empty')
        return 
    }

    updateComments(id, [{id:Date().toString() ,body:subCommentValue,subComments:[]}])
    setSubCommentValue('')
  }
    return <div className="comment-container">{body}
  

        <input type="text" required value={subCommentValue} onChange={(e)=>{setSubCommentValue(e.target.value)}}/>
     <button type='submit' onClick={addComment}>add comment</button>


  
   { subComments?.length>0 && subComments?.map((subComment)=> <Comments key={subComment.id} {...subComment} updateComments={updateComments}/>)}
    
    </div>
}
export default Comments