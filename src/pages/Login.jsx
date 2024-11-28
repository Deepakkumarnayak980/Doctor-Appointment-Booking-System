import React, { useState } from 'react'

function Login() {

  const [state,setState]=useState('Sign Up')

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const[name,setName]=useState('')

  const onSubmitHandler=async (event) =>{
    event.preventDefault()

  }


  return (
    <form className='min-h-[80vh] flex items-center'>
      <div>
        <p>{state === 'Sign Up' ? "Crete Account" :"Login"}</p>
        <p>Please {state === 'Sign Up' ? 'sign up ' :'log in'} to book appointment</p>
        <div>
          <p>Full Name</p>
          <input type='text' onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>
        <div>
          <p>Email</p>
          <input type='email' onChange={(e)=>setEmail(e.target.name)} value={name} required/>
        </div>
        <div>
          <p>Password</p>
          <input type='password' onChange={(e)=>setPassword(e.target.name)} value={name} required/>
        </div>
        <button>{state === 'Sign Up' ? "Crete Account" :"Login"}</button>
      </div>
      
    </form>
  )
}

export default Login
