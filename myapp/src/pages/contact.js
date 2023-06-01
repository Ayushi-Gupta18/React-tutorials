import React, { useState } from 'react'
export const Contact = () => {

  const [email,setEmail] = useState();
  const [password,setPassword]=useState();



  return (<>
  <div className='container mx-auto h-[500px] w-[250px]  bg-yellow-300'>
    <div className='m-2 pt-6 p-2'>

<input type='text' placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}></input>
    </div>
    <div className='m-2 pt-6 p-2'>

<input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input>
<div >
<button className='rounded bg-orange-300 h-[30px] w-[200px] mt-4 p-2 text-red-700 text-center' onClick={()=>{console.log("email : "+email+"   password : "+password)}}>login </button>

</div>

    </div>
  </div>

  </>
  )
}

