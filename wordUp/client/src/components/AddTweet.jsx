import React from 'react';


export default function AddTweet(props) {
  const { content, image } = props.tweetData

  return (
    <div className="forms">
      <h3>Bork Here</h3>
      <form onSubmit={props.newTweet}>
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

        <button className="add-form-button">+</button>

      </form>
    </div>
  )
}
