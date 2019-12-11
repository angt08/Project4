import React from 'react';
import { createComment } from '../services/api-helper'


export default function AddComment(props) {
  const { content, image } = props.commentForm
  const newComment = async (e) => {
  const comment = await createComment(props.currentUser.id, props.tweet_id, props.commentForm);

  }

  return (
    <div className="forms">
      <h3>Comment:</h3>
      <form onSubmit={(e) => {
        e.preventDefault()
        newComment()
      }}>
        <input
          type="text"
          placeholder="What is going on?"
          name="content"
          value={content}
          onChange={props.handleChange} />

        <input
          type="text"
          placeholder="Enter image/gif"
          name="image"
          value={image}
          onChange={props.handleChange} />

        <button className="delete-comment">
          comment
        </button>

      </form>
    </div >
  )
}
