import React from 'react';
import { withRouter } from 'react-router-dom';

function EditTweetForm(props) {

  return (
    <>
      <form onSubmit={props.editTweet}>
        <p>gif/image:</p>
        <input
          type="text"
          name="image"
          value={props.tweetForm}
          onChange={props.handleFormChange} />
         
        <p>
          content:
        </p> 
        <input
          type="text"
          content="content"
          value={props.tweetForm}
          onChange={props.handleFormChange} />
        
        <button>Submit</button>
      </form>
    </>
  )
}

export default withRouter(EditTweetForm);