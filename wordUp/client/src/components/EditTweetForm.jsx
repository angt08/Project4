import React from 'react';
import { withRouter } from 'react-router-dom';
import { updateTweet } from '../services/api-helper'



function EditTweetForm(props) {
  const editTweet = async (e) => {
    e.preventDefault();
    await updateTweet(props.tweetId, props.tweetData);
  }
  const { content, image } = props.tweetData
  return (
    <div id="edit-tweet-form">
      <form onSubmit={editTweet}>

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
        
        <hr/>
       
        <button>Submit</button>
     

      </form>
    </div>
  )
}

export default withRouter(EditTweetForm);