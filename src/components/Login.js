import React from 'react'

export default function Login() {
    return (
        <form id="login" >

          <div className="input-container">
            <label for="email" className="label">Email id</label>
            <div className="icon-text">
              <i className="far fa-envelope"></i>
              <input name="email" id="email" type="text" className="input" placeholder="EMAIL" ></input>
              <p className="error-text">Email is invalid</p>
            </div>
          </div>

          <div className="input-container">
            <label for="password" className="label">Password</label>
            <div className="icon-text">
              <i className="fas fa-lock"></i>
              <input name="password" id="password" type="password" className="input" placeholder="PASSWORD" ></input>
              <p className="error-text">Password should be of size 6 to 12 alphabets</p>
            </div>
          </div>

        </form>
    )
}
