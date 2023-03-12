import React, { FC } from 'react'
import './index.css'

interface UserTypePros  {
  value: String;
  onChange: (role: String) => void
}

const UserType:FC<UserTypePros> = ({value ="ADMIN", onChange}) => {
  const ROLES = ["ADMIN", "MANAGER"];

  return (
    <div className='mb-4'>
      <div className='heading mb-4'>User Types</div>
      {
        ROLES.map(role => {
          return (
            <div onClick={() => onChange(role)} key={role} className={`input-wrap ${role === value ? 'active' : ''}`}>
              <input checked={value===role} readOnly id={role} type="radio" name='role' />
              <label htmlFor={role}>{role.toLowerCase()}</label>
            </div>
          )
        })
      }
    </div>
  )
}

export default UserType