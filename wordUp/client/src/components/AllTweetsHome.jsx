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

              <button onClick={() => {
                this.props.deleteTweet(tweet.id);
                // this.props.history.push('/all-tweets')
              }}>
                Delete
                </button>

              <Link to='/edit-tweet'
                onClick={this.props.tweetForm}>
                <button>
                  Edit
               </button>
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}