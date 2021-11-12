import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import './Comment.scss'

const Comment = ({comment={}}) => {
  return (
    <div className='comment' key={comment.id}>
      <div className='comment__image'>
        <Link to={`/user/${comment.user.id}`}><img src={comment.user.image} alt={`${comment.user.firstName}`} /></Link>
      </div>
      <div className='comment__content'>
        <p className='comment__content__user-info'>
          <Link to={`/user/${comment.user.id}`} className="comment__content__user-name" >{comment.user.firstName} {comment.user.lastName}</Link> 
          <span className='comment__content__date'><FontAwesomeIcon icon={faClock} /> <time>{comment.createdAt.split('T')[0]}</time></span>
        </p>
        <p className='comment__content__comment'>{comment.content}</p>
      </div>
    </div>
  )
}

export default Comment
