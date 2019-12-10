import React from 'react';
import { Link } from 'react-router-dom';

export default class AllTweetsHome extends React.Component {


  render() {
    return (

      <div id="all-tweets">

        

        {
          this.props.tweets.map(tweet => (
            <div key={tweet.id} className="tweet">
              <h4>@{tweet.user.username}</h4>
              <p>{tweet.content}</p>
              <img src={tweet.image} alt="a meme" />



              <button className="edit-delete-buttons" onClick={() => {
                this.props.deleteTweet(tweet.id);
                // this.props.history.push('/all-tweets')
              }}>
                <img className="edit-delete-buttons"
                  src="https://i.imgur.com/pioMf5p.gif" alt="Delete"
                  title="Delete" />
              </button>

              <Link to={`/edit-tweet/${tweet.id}`}>
                {/* onClick={this.props.tweetForm}> */}

                <button className="edit-delete-buttons"
                  id={tweet.id}>
                  <img className="edit-delete-buttons"
                    src="https://i.imgur.com/sLX2NkT.jpg?1" alt="Edit"
                    title="Edit" />
                </button>
              </Link >

              {tweet.comments &&
                tweet.comments.map(comment => (

                  <div key={comment.id}>
                    <h4>
                      @{comment.user.username}
                    </h4>
                    <p>
                    {comment.content}
                    </p>
                      
                    
                    <div className="comment-buttons" onClick={() => {
                      this.props.deleteComment(comment.id);

                    }}>
                      <span>

                      <img className="comment-buttons"
                        src="https://i.imgur.com/pioMf5p.gif" alt="Delete" title="Delete comment" />
                      </span>
                    </div>
                  </div>
                ))
              }

              <div className="comment-buttons">
                <Link className="comment-buttons"
                  to={`/${tweet.id}/add-comment`}>
                  <img
                    className="comment-buttons"
                    src="https://i.imgur.com/9v0iFXy.jpg" alt="comment"
                    title="Comment"
                  />
                </Link>
              </div>
            </div>

          ))
        }
       
      </div>
    )
  }
}