import React from 'react'

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type = "text" placeholder="Enter email" />
        <input type = "password" placeholder=" Enter Passwrod" />

        <button> <a href = "/iteam">Login</a></button>

        <p className = "text-danger">Don't have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  )
}

export default Login
