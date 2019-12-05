import React from 'react'

export  default class AllTweetsHome extends React.Component {
  

  

  render() {
    return (
      <div id="all-tweets">
        {
          this.props.tweets.map(tweet => (
            <div key={tweet.id} className="tweet">
              <img src={tweet.image} alt=" a meme" />
              <p>{tweet.content}</p>

              <button onClick={() => {
                  this.props.deleteTweet(tweet.id);
                  // this.props.history.push('/all-tweets')
              }}>
                Delete
                </button>
            </div>
          ))
        }
      </div>
    )
  }
}