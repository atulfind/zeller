import React, { useEffect, useState } from 'react';
import Customers from './components/Customers';
import UserType from './components/UserType';
import { getZellerCustomers } from './services';
import './App.css'
import { UserPros } from './components/Customer';

const App = () => {
  const [customersData, setCustomersData] = useState<UserPros[]>([])
  const [selectedRole, setSelectedRole] = useState<String>("ADMIN");
  const [isLoading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true)
      const resp: any = await getZellerCustomers();
      const respData = resp?.data?.listZellerCustomers?.items || [];
      setCustomersData(respData)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (isLoading) return <p className='center mt-4'>Loading...</p>

  return (
    <div className="App">
      <UserType value={selectedRole} onChange={setSelectedRole} />
      <hr />
      <Customers selectedRole={selectedRole} data={customersData} />
      <hr />
    </div>
  );
}

export default App;
