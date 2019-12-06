import React from 'react';


export default function AddTweet(props) {
  const { content, image } = props.tweetData

  return (
    <>
      <h2>Create a new tweet</h2>
      <form onSubmit={props.newTweet}>
        <h4>Saywhat:</h4>
        <input
          type="text"
          name="content"
          value={content}
          onChange={props.handleChange} />

        <h4>enter image/gif:</h4>
        <input
          type="text"
          name="image"
          value={image}
          onChange={props.handleChange} />

        <button>submit</button>

      </form>
    </>
  )
}
