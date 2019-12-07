import React from 'react';


export default function AddTweet(props) {
  const { content, image } = props.tweetData

  return (
    <div className="forms">
      <h2>Add new </h2>
      <form onSubmit={props.newTweet}>
        <input
          type="text"
          placeholder="What you thinkin'?"
          name="content"
          value={content}
          onChange={props.handleChange} />

        <input
          type="text"
          placeholder="Enter image/gif"
          name="image"
          value={image}
          onChange={props.handleChange} />

        <button>+</button>

      </form>
    </div>
  )
}
