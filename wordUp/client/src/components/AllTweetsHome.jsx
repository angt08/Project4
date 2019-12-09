import React from 'react';
import { Link } from 'react-router-dom';

export default class AllTweetsHome extends React.Component {


  render() {
    return (

      <div id="all-tweets">

        {
          this.props.tweets.map(tweet => (
            <div key={tweet.id} className="tweet">
              <p>{tweet.content}</p>

              <img src={tweet.image} alt="a meme" />

              <button className="edit-delete-buttons" onClick={() => {
                this.props.deleteTweet(tweet.id);
                // this.props.history.push('/all-tweets')
              }}>
                <img className="edit-delete-buttons"
                  src="https://i.imgur.com/pioMf5p.gif" alt="Delete" />

              </button>

              <Link to={`/edit-tweet/${tweet.id}`}>
                {/* onClick={this.props.tweetForm}> */}

                <button className="edit-delete-buttons"
                  id={tweet.id}>
                  <img className="edit-delete-buttons"
                    src="https://i.imgur.com/sLX2NkT.jpg?1" alt="Edit" />
                </button>
              </Link >

              {tweet.comments &&
                tweet.comments.map(comment => (

                  <div key={comment.id}>
                    <p><span>{comment.user.username}</span> {comment.content}</p>

                    <button className="edit-delete-buttons" onClick={() => {
                      this.props.deleteComment(comment.id);
                      
                    }}>
                      <img className="edit-delete-buttons"
                        src="https://i.imgur.com/pioMf5p.gif" alt="Delete" />
                    </button>
                  </div>
                ))
              }

              <Link className="edit-delete-buttons"
                to={`/${tweet.id}/add-comment`}>Add Comment
              </Link>




            </div>
          ))
        }
      </div>
    )
  }
}