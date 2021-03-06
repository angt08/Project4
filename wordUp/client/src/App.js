import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import AllTweetsHome from './components/AllTweetsHome';
import AddComment from './components/AddComment';
import EditTweetForm from './components/EditTweetForm';
import AddTweet from './components/AddTweet';
import {
  getAllTweets,
  destroyTweet,
  createTweet,
  createComment,
  destroyComment,
} from './services/api-helper';

import {
  createUser,
  readAllUsers,
  updateUser,
  destroyUser,
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addtweet: '',
      updateTweet: '',
      destroyTweet: '',
      addcomment: '',
      destroyComment: '',
      users: [],
      userForm: {
        name: "",
        photo: ""
      },

      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: "",
        image:"",
      },

      tweetForm: {
        content: "",
        image: "",
      },
      tweets: [],

      commentForm: {
        content: "",
        image: "",
      },
      comments: [],
    };
  }



  async componentDidMount() {
    this.getUsers();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
      const tweets = await getAllTweets()
      this.setState({
        tweets
      })
    }
  }

  getTweets = async () => {
    const tweets = await getAllTweets()
    this.setState({
      tweets
    })
  }


  getUsers = async () => {
    const users = await readAllUsers();
    this.setState({
      users
    })
  }

  newUser = async (e) => {
    e.preventDefault();
    const user = await createUser(this.state.userForm);
    this.setState(prevState => ({
      users: [...prevState.users, user],
      userForm: {
        name: "",
        photo: ""
      }
    }))
  }

  editUser = async () => {
    const { userForm } = this.state
    await updateUser(userForm.id, userForm);
    this.setState(prevState => (
      {
        users: prevState.users.map(user => {
          return user.id === userForm.id ? userForm : user
        }),
      }
    ))
  }

  deleteUser = async (id) => {
    await destroyUser(id);
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== id)
    }))
  }
  // -------------

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userForm: {
        ...prevState.userForm,
        [name]: value
      }
    }))
  }



  handleCreateFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      tweetForm: {
        ...prevState.tweetForm,
        [name]: value
      }
    }))
  }

  mountEditForm = async (id) => {
    const users = await readAllUsers();
    const user = users.find(el => el.id === parseInt(id));
    this.setState({
      userForm: user
    });
  }

  resetForm = () => {
    this.setState({
      userForm: {
        name: "",
        photo: ""
      }
    })
  }


  //----------------add/update/delete a tweet-----------
  newTweet = async (e) => {
    e.preventDefault();
    const tweet = await createTweet(this.state.tweetForm);
    this.setState(prevState => ({
      tweets: [...prevState.tweets, tweet],
      tweetForm: {
        content: "",
        image: " "
      }
    }))
  }


  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      tweetForm: {
        ...prevState.tweetForm,
        [name]: value
      }
    }))
  }


  deleteTweet = async (id) => {
    await destroyTweet(id);
    this.setState(prevState => ({
      tweets: prevState.tweets.filter(tweet => tweet.id !== id)
    }))
    this.props.history.push('/all-tweets')
  }


  //-------- add/delete comments----------------

  newComment = async (e) => {
    e.preventDefault();
    const comment = await createComment(this.state.currentUser.id, this.props.match.params.tweet_id, this.state.commentForm);
    this.setState(prevState => ({
      comments: [...prevState.comments, comment],
      commentForm: {
        content: "",
        image: " "
      }
    }))
  }

  handleCreateFormChangeComment = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      commentForm: {
        ...prevState.commentForm,
        [name]: value
      }
    }))
  }

  deleteComment = async (id) => {
    await destroyComment(id);
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => comment.id !== id)
    }))
    this.props.history.push('/all-tweets')
  }


  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")

  }
  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    await this.getTweets()
    this.props.history.push(`/user/${this.state.currentUser.id}`);
    console.log(this.state.currentUser);
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
    this.props.history.push("/login")
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }




  render() {
    return (
      <div className="App" >
        <Header
          handleLoginButton={this.handleLoginButton}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />


        <div className="main">

          <div id="button-links">
            {
              this.state.currentUser ?
                <>
                  <Link to="/all-tweets/"
                    className="add-button">
                    all borks
                </Link>


                  <Link
                    className="add-button"
                    to={`/add-tweet`}>
                    create
                </Link>
                </> :
                <>

                </>
            }
          </div>

          <Route exact path="/login"
            render={() => (
              <Login
                handleLogin={this.handleLogin}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData} />)}
          />

          <Route exact path="/register"
            render={() => (
              <Register
                handleRegister={this.handleRegister}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData} />)}
          />

          <Route exact path="/all-tweets"
            render={() => <AllTweetsHome
             
              tweets={this.state.tweets}
              deleteTweet={this.deleteTweet}
              editTweet={this.editTweet}
              handleFormChange={this.handleFormChange}
              deleteComment={this.deleteComment}
            />} />


          <Route exact path="/add-tweet"
            render={(props) => <AddTweet
              handleChange={this.handleCreateFormChange}
              newTweet={this.newTweet}
              tweetData={this.state.tweetForm}
            />} />

          <Route exact path="/edit-tweet/:tweetId"
            render={(props) => <EditTweetForm
              // editTweet={this.editTweet}
              tweetData={this.state.tweetForm}
              handleFormChange={this.handleFormChange}
              tweetId={props.match.params.tweetId}

            />} />

          <Route exact path="/:tweet_id/add-comment/"
            render={(props) => <AddComment
              handleChange={this.handleCreateFormChangeComment}
              newComment={this.newComment}
              commentForm={this.state.commentForm}
              tweet_id={props.match.params.tweet_id}
              currentUser={this.state.currentUser}
              deleteComment={this.deleteComment}
            />} />



        </div>

        <footer>

        </footer>
      </div>
    );
  }
}


export default withRouter(App);

