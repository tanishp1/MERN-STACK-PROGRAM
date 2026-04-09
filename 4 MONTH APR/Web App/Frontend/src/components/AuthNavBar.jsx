import React from 'react'

const AuthNavBar = () => {
  return (
    <div>
      <div className = "d-flex bg-light ">

        <div className = "mx-5 ">
          <h3>Logo</h3>
        </div>

        <div className = "mx-5">
          <h3> <a href="/dashboard">Dashboard</a></h3>
        </div>

        <div className = "mx-5">
          <h3> <a href="/iteam">Iteams</a></h3>
        </div>

      </div>
    </div>
  )
}

export default AuthNavBar
