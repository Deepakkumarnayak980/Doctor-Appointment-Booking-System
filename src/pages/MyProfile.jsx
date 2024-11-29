import React, { useState } from 'react'
import { assets } from '../assets/assets'


function MyProfile() {

  const [userData, setUserData] = useState({
    name: 'Deepak',
    image: assets.profile_pic,
    email: '635 125 4256',
    address: {
      line1: "57th cruss,Richmond",
      line2: "Circle ,Church Rode ,London"
    }
    ,
    gender: "Male",
    dob: '2000-10-12'
  })

  const [isEdit, setIsEdite] = useState(false)

  return (
    <div>
      <img src={userData.image} />

      {
        isEdit
          ? <input type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p>{userData.name}</p>
      }
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
            isEdit
              ? <input type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p>{userData.phone}</p>
          }
          <p>Address:</p>
          {
            isEdit
              ? <p>
                <input onChange={(e)=>setUserData(prev =>({...prev,address:{...prev.address,line1:e.target.value}}))} 
                value={userData.address.line1}
                type='text' />
                <br />
                <input onChange={(e)=>setUserData(prev =>({...prev,address:{...prev.address,line2:e.target.value}}))} 
                value={userData.address.line2} type='text' />
              </p>
              : <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default MyProfile
