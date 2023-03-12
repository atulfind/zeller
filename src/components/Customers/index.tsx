import React, { FC } from 'react'
import Customer, { UserPros } from '../Customer'

interface CustomersProps {
  data: UserPros[],
  selectedRole: String
}

const Customers: FC<CustomersProps> = ({data, selectedRole}) => {

  return (
    <div className='mt-3 mb-4'>
      <div className='heading mb-4'>{selectedRole.toLowerCase()} Users</div>
      {
        data.map((item:UserPros) => item.role === selectedRole ? <Customer key={item.id} data={item}/> : null)
      }
    </div>
  )
}

export default Customers