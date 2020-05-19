import React from 'react';
import {Image, Comment,Button} from 'semantic-ui-react'
import {useSelector} from 'react-redux'



function CommentComponent({comments, deleteComment}){


  const user = useSelector(state => state.user)  
  

  console.log(user)
  const commentz = comments.map(comment =>{  
    return(
    <Comment key ={comment.id}>
         <Comment.Content>
             <Comment.Author as='a'>{comment.poster.poster_name}</Comment.Author><Comment.Metadata>
             <div>Today at 5:42PM</div>
             {user && user.username === comment.poster.poster_name?
              <Button onClick={ ()=>deleteComment(comment)} varient="primary">Delete</Button>: null
              }
             </Comment.Metadata>
             <Comment.Text>{comment.comment}</Comment.Text>
         </Comment.Content>
       </Comment>
    )
   })
      



  return (
      <>
    <Comment.Group>
      {commentz}
    </Comment.Group>

    </>
  )
}

export default CommentComponent