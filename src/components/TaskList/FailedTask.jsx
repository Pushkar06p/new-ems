import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const FailedTask = ({name,data}) => {

    const [userData, setUserData] = useContext(AuthContext) 
    
    const done=(e) =>{
            
            // e.preventDefault();
                
            const updatedDate= userData.map(user => {
                // console.log(user.firstName,name);
                if(user.firstName === name){
                // console.log(user);
                
                    return {
                        ...user,
                        taskCounts: {
                            ...user.taskCounts,
                            failed: user.taskCounts.failed + 1,
                            newTask: user.taskCounts.newTask - 1
                        },
                        tasks: user.tasks.map(task => {
                            if(task.taskDescription === data.taskDescription){
                                return {
                                    ...task,
                                    active: false,
                                    newTask: false,
                                    completed: false,
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
    const undo=(e) =>{
        
            
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
                                    active: true,
                                    newTask: false,
                                    completed: false,
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

  return (
     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 '>
                <button onClick={(e)=>{
                  done(e);
                }} className='w-full bg-green-500 rounded font-medium py-1 px-2 text-xs mr-5'> Fail </button>
                <button onClick={(e)=>{
                  undo(e);
                }}
                 className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Undo</button>
            </div>
        </div>
  )
}

export default FailedTask