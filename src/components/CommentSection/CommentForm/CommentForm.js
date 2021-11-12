import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {AuthContext} from '../../../Contexts/UserProvider'
import './CommentForm.scss'

const CommentForm = ({caseType, caseId, setComments}) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const {loggedUser, isLogged, userToken} = useContext(AuthContext);
  const [comment, setComment] = useState('')
  

  const handleOnChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if(isLogged && comment){
      axios
        .post(`${url}/addComment`, {comment, userId: loggedUser.id, caseType, caseId}, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            Authorization: `bearer ${userToken}`
          }
        })
        .then(response => {
          console.log(response);
          setComment('')
          const new_comment = {...response.data.comment, user: loggedUser}
          setComments(pre_comments => [new_comment, ...pre_comments])
        })
        .catch(error => {
          console.log(error);
        });
    };
  }

  return (
    <div className='write-comment'>
      <div className='comment__image'>
        <Link to={`/user/${loggedUser.id}`}><img src={loggedUser.image} alt={`${loggedUser.firstName}`} /></Link>
      </div>
      <form method="POST" name="post_comment" id="post_comment" className='write-comment__form' onSubmit={handleSubmit}>
        <div className='write-comment__form__field'>
          <input type="text" onChange={handleOnChange} value={comment} name="comment_content" className='write-comment__form__input' placeholder="اكتب تعليقك....." required />
        </div>
      </form>
    </div>
  )
}

export default CommentForm
