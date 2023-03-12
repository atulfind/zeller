import { FC } from 'react'
import './index.css'

export interface UserPros {
  id: any;
  name: String;
  role: String;
}

export interface CustomerProps {
  data: UserPros
}

const Customer: FC<CustomerProps>= ({data}) => {

  return (
    <div className='customer'>
      <div className='avatar'>
        {data.name.charAt(0)}
      </div>
      <div className='avatar-details'>
        <div className='title' data-testid="name">{data.name}</div>
        <div className='sub-title'  data-testid="role">{data.role.toLowerCase()}</div>
      </div>
    </div>
  )
}

export default Customer
