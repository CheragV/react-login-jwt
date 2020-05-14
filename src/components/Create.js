import React from 'react'

export default function Create() {
    return (
        <form id="create">

          <div className="input-container">
            <label htmlFor="username" className="label">User Name</label>
            <div className="icon-text">
              <i className = "fas fa-user"></i>
              <input name="username" id="username" type="text" className="input" placeholder="USERNAME" ></input>
              <p className="error-text">Username is in-valid</p>
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="email" className="label">Email id</label>
            <div className="icon-text">
              <i className = "far fa-envelope"></i>
            <input name="email" id="email" type="text" className="input" placeholder="EMAIL" ></input>
            <p className="error-text">Email is invalid</p>
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="password" className="label">Password</label>
            <div className="icon-text">
              <i className = "fas fa-lock"></i>
            <input name="password" id="password" type="password" className="input" placeholder="PASSWORD" ></input>
            <p className="error-text">Password should be of size 6 to 12 alphabets</p>
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="cpassword" className="label">Confirm Password</label>
            <div className="icon-text">
              <i className = "fas fa-lock"></i>
            <input name="cpassword" id="cpassword" type="password" className="input" placeholder="CONFIRM PASSWORD" ></input>
            <p className="error-text">Passwords do not Match</p>
            </div>
          </div>

        </form>
    )
}
