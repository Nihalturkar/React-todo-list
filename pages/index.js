"use client"

import React, { useState } from 'react'

const index = () => {
  const [task, settask] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e)=>{
   e.preventDefault()
   settask("") 

   setmainTask([...mainTask,{task}])
   console.log(mainTask)
  }

const deleteHandler = (i)=>{
 let copytask = [...mainTask]
 copytask.splice(i,1)
 setmainTask(copytask)
}

  let wtask = <h2>No task Available</h2>

if (mainTask.length>0){
  wtask = mainTask.map((f,i)=>{
    return <li key={i} className='font-bold capitalize flex justify-between'>
      <div>
        <h4>{f.task}</h4>
      </div>
      <button onClick={()=>{deleteHandler(i)}} className='px-5 py-2 bg-red-500 rounded mb-4'>Delete</button>
    </li>
  
  })
}

  return (
    <>
    <h1 className='bg-white text-black text-5xl text-center mt-20 font-bold'>My Todo List</h1>
    
    <form className=' w-100 border-white text-center mt-10 ' onSubmit={submitHandler}>

      <input type="text"  placeholder='Enter task here' value={task} onChange={(e)=> settask(e.target.value)} className=' font-bold text-2xl  py-2 text-black p-2'/>
      <button className='bg-blue-600 text-2xl p-2 mx-5 px-5 rounded'>Add</button>
    </form>


    <div className='p-5 bg-slate-100 text-black mt-5  text-center w-1/2 mx-auto'>
  <ul>
  {wtask}
  </ul>
    </div>
    
    </>
  )
}

export default index;