import React from 'react'

export default function Create() {
    return (
        <form id="create">

          <div className="input-container">
            <label for="username" className="label">User Name</label>
            <div className="icon-text">
              <i class="fas fa-user"></i>
              <input name="username" id="username" type="text" className="input" placeholder="USERNAME" ></input>
            </div>
          </div>

          <div className="input-container">
            <label for="email" className="label">Email id</label>
            <div className="icon-text">
              <i class="far fa-envelope"></i>
              <input name="email" id="email" type="text" className="input" placeholder="EMAIL" ></input>
            </div>
          </div>

          <div className="input-container">
            <label for="password" className="label">Password</label>
            <div className="icon-text">
              <i class="fas fa-lock"></i>
              <input name="password" id="password" type="password" className="input" placeholder="PASSWORD" ></input>
            </div>
          </div>

          <div className="input-container">
            <label for="cpassword" className="label">Confirm Password</label>
            <div className="icon-text">
              <i class="fas fa-lock"></i>
              <input name="cpassword" id="cpassword" type="password" className="input" placeholder="CONFIRM PASSWORD" ></input>
            </div>
          </div>

        </form>
    )
}
