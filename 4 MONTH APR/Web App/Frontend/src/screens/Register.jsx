import React from 'react'

const Register = () => {
  return (
    <div>
      <h2>Register</h2>

      <input type = "text"  placeholder = " Enter name"  />
      <input type = "email"  placeholder = " Enter email"  />
      <input type = "password"  placeholder = " Enter password"  />

      <button>Register</button>
      
      <p className = "text-danger">Already have an account? <a href="/login">Login</a></p>
    </div>
  )
}

export default Register
