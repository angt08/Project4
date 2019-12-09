import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header >
      <Link
        to='/all-tweets'
        onClick={props.resetForm}>
        {/* <h1>WordUp</h1> */}
        <img id="web-logo"
          src="https://i.imgur.com/nMLlupR.png" alt="Edit" />
      </Link>
      
      <>

        {props.currentUser
          ?
          <>
            <h3>Meow again {props.currentUser.username}!</h3>
            
            <button onClick={props.handleLogout}
              id="logout-button">logout
            </button>

          </>
          :
          <button onClick={props.handleLoginButton}>
            Login/Reg
          </button>
        }
      </>

    </header>
  )
}
