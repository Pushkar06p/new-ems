import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {
   const [userData,SetUserData] = useContext(AuthContext);
   const user= userData.find(user => user.firstName === props.name);
  //  console.log(user);
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={user}/>
        <TaskListNumbers data={user} />
        <TaskList data={user} />
    </div>
  )
}

export default EmployeeDashboard