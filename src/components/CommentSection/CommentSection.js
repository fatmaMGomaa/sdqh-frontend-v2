import React from 'react'
import Comment from './Comment/Comment'
import CommentForm from './CommentForm/CommentForm';

const CommentSection = ({comments, caseType, caseId, setComments}) => {

  return (
    <div className='comments-wrapper'>
      <h4>التعليقات</h4>
      <CommentForm caseType={caseType} caseId={caseId} setComments={setComments} />
      <div className='comments-container'>
        {
          comments&& comments.map(comment => {
          return(
            <Comment comment={comment} key={comment.id}/>
          )
        })
      }
      </div>
    </div>
  )
}

export default CommentSection
