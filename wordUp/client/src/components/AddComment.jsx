import React from 'react';


export default function AddComment(props) {
  const { content, image } = props.commentData

  return (
    <div className="forms">
      <h3>Comment Here</h3>
      <form onSubmit={props.newComment}>
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

        <button className="delete-comment">delete</button>

      </form>
    </div>
  )
}
