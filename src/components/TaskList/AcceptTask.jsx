import React, { useContext,useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ name, data }) => {
    // console.log(data);
     const [userData, setUserData] = useContext(AuthContext)
    const changecompleted=(e) =>{
         
          // e.preventDefault();
           
          const updatedDate= userData.map(user => {
            console.log(user.firstName,name);
            if(user.firstName === name){
              // console.log(user);
              
                return {
                    ...user,
                    tasks: user.tasks.map(task => {
                        if(task.taskDescription === data.taskDescription){
                            return {
                                ...task,
                                active: false,
                                newTask: false,
                                completed: true,
                                failed: false
                            }
                        }
                        return task;
                    })
                }
            }
            return user;
          });
          setUserData(updatedDate); 
          console.log(updatedDate);
    }
    const changeFailed=(e) =>{
         
          // e.preventDefault();
           
          const updatedDate= userData.map(user => {
            // console.log(user.firstName,name);
            if(user.firstName === name){
              // console.log(user);
              
                return {
                    ...user,
                    tasks: user.tasks.map(task => {
                        if(task.taskDescription === data.taskDescription){
                            return {
                                ...task,
                                active: false,
                                newTask: false,
                                completed: false,
                                failed: true
                            }
                        }
                        return task;
                    })
                }
            }
            return user;
          });
          setUserData(updatedDate); 
          console.log(updatedDate);
    }
  return (
  <div className='text-black flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl shadow-md'>
  <div className='flex justify-between items-center'>
    <h3 className='bg-red-600 text-black text-sm px-3 py-1 rounded'>
      {data.category}
    </h3>
    <h4 className='text-sm font-semibold  text-black'>{data.taskDate}</h4>
  </div>

  <h2 className='mt-5 text-2xl font-semibold truncate text-black'>
    {data.taskTitle}
  </h2>

  <p className='text-sm mt-2 line-clamp-3 text-black'>
    {data.taskDescription}
  </p>

  <div className='flex justify-between mt-6'>
    <button
      onClick={(e) => changecompleted(e)}
      className='bg-green-500 hover:bg-green-600 text-black rounded font-medium py-1 px-2 text-xs transition'
    >
      Mark as Completed
    </button>

    <button
      onClick={(e) => changeFailed(e)}
      className='bg-red-500 hover:bg-red-600 text-black rounded font-medium py-1 px-2 text-xs transition'
    >
      Mark as Failed
    </button>
  </div>
</div>

  )
}

export default AcceptTask