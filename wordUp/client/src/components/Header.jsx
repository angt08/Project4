import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header >
      <h1>
        <Link to='/all-tweets'
          onClick={props.resetForm}>WordUp</Link>
      </h1>

      <div>
        {props.currentUser
          ?
          <>
            <h3>Meow again {props.currentUser.username}!</h3>
            <button
              onClick={props.handleLogout}
              id="logout-button">logout
            </button>

          </>
          :
          <button
            onClick={props.handleLoginButton}>
            Login/Reg
          </button>
        }
      </div>

    </header>
  )
}
