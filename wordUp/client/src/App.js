import React,{ Component}from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import './App.css';

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
      teachers: [],
      teacherForm: {
        name: "",
        photo: ""
      },
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  async componentDidMount() {
    this.getUsers();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  getUsers = async () => {
    const teachers = await readAllUsers();
    this.setState({
      teachers
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
        users: prevState.teachers.map(user => {
          return user.id === userForm.id ? userForm : user
        }),
      }
    ))
  }

  deleteUser = async (id) => {
    await destroyUser(id);
    this.setState(prevState => ({
      teachers: prevState.teachers.filter(user => user.id !== id)
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

  mountEditForm = async (id) => {
    const users = await readAllUsers();
    const user = users.find(el => el.id === parseInt(id));
    this.setState({
     userForm: user
    });
  }

  resetForm = () => {
    this.setState({
      teacherForm: {
        name: "",
        photo: ""
      }
    })
  }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
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
      
      
      </div>
    );
  }
}


export default App;
