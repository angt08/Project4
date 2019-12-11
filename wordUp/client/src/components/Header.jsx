import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header >
      <Link
        to='/all-tweets'
        onClick={props.resetForm}>
        <img
          id="web-logo"
          src="https://i.imgur.com/nMLlupR.png"
          alt="Edit"
        />
      </Link>

      <>

        {props.currentUser
          ?
          <>
            <h3>Meow again {props.currentUser.username}!</h3>

                <img onClick={props.handleLogout}
                className="logout-button"
                src="https://i.imgur.com/tVJRj5r.png"
                alt="log-out"
                title="logout"
              />
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
