import React from 'react'

const tailwind = () => {
  return (
    <>
    <div>
        <h1 className='text-green-800 bg-yellow-400 text-center mr-20 ml-20 h-1/4 w-1/4  overflow-y overflow-x-auto box-content'>Welcome this is a impotant toolm for everyone to understand for what i Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto perspiciatis quod tempore, cum illo vero temporibus saepe libero velit quaerat delectus aut soluta quam veritatis, dicta quis accusantium porro.Lorem</h1>
    </div>
    <div className='p-20'>
      <h1 className='z-10 text-center absolute h-20 w-30 bg-red-200'>hello</h1>
      <h1 className='z-20 absolute h-30 w-50 mt-10 bg-green-300'>hello</h1>
      <h1 className='z-30 absolute h-40 w-70 mt-20 bg-blue-300'>hello</h1>

    </div>
    <div className='bg-no-repeat bg-cover h-150 w-50 mt-50' style={{backgroundImage:"url('../src/assets/prop.jpg')",width:'100%'}}>
       Nature
     <div className='w-50 h-50 bg-no-repeat bg-center ml-20 opacity-30' style={{backgroundImage:"url('../src/assets/download.jpeg')"}}>
      <img src="../src/assets/fb.png" alt="" />
      nature love
     </div>
    </div>
    </>
  )
}

export default tailwind