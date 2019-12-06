import React from 'react';
import { withRouter } from 'react-router-dom';

function EditTweetForm(props) {
  const { content, image } = props.tweetData
  return (
    <>
      <form onSubmit={props.handleFormChange}>


        <input
          type="text"
          name="image"
          placeholder="image/gif url"
          value={image}
          onChange={props.handleFormChange} />

        <input
          type="text"
          name="content"
          placeholder="What you thinkin'?"
          value={content}
          onChange={props.handleFormChange} />

        <button>Submit</button>
      </form>
    </>
  )
}

export default withRouter(EditTweetForm);