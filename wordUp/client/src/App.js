import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import { withRouter } from 'react-router';
import AllTweetsHome from './components/AllTweetsHome';
import AddTweet from './components/AddTweet';
import { createTweet } from './services/api-helper.js'
import './App.css';
import { getAllTweets,destroyTweet} from './services/api-helper';


import {
  createUser,
  readAllUsers,
  updateUser,
  destroyUser,
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addtweet: '',
      addcomment: '',
      destroyTweet: '',
      users: [],
      userForm: {
        name: "",
        photo: ""
      },
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      },
      tweetForm: {
        content: "",
        image: ""
      },
      tweets: []
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

  newTweet = async (e) => {
    e.preventDefault();
    const tweet = await createTweet(this.state.tweetForm);
    this.setState(prevState => ({
      tweets: [...prevState.tweets, tweet],
      tweetForm: {
        content: "",
        image: ""
      }
    }))
  }

  deleteTweet = async (id) => {
    await destroyTweet(id);
    this.setState(prevState => ({
      tweets: prevState.tweets.filter(tweet => tweet.id !== id)
    }))
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
        {
          this.state.currentUser ?
            <><Link to={"/all-tweets"}
              render={<AllTweetsHome />}>
              <button>All my tweets</button>
            </Link>
              
              <Link to={`/add-tweet`}>
                <button>Create a tweet</button>
              </Link> </> :
            <></>
        }


        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)}
        />

        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)}
        />

        <Route exact path="/all-tweets"
          render={() => <AllTweetsHome
            tweets={this.state.tweets}
            deleteTweet={this.deleteTweet}
          />} />


        <Route exact path="/add-tweet"
          render={(props) => <AddTweet
            handleChange={this.handleCreateFormChange}
            newTweet={this.newTweet}
            tweetData={this.state.tweetForm}
            
          />}

        />
        



      </div>
    );
  }
}


export default withRouter(App);

