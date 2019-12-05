import React from 'react'

export default function AddTweet(props) {
  const { content, image } = props.tweetData

  return (
<>
    <h2>Create a new tweet</h2>
    <form onSubmit={props.newTweet}>
      <input
        type="text"
        name="image"
        value={image}
        onChange={props.handleChange} />
      <input
        type="text"
        name="content"
        value={content}
        onChange={props.handleChange} />
      <button>Submit</button>
    </form>
</>
  )
}
