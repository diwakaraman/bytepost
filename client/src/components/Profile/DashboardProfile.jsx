import React from 'react'
import { FaUser } from "react-icons/fa";
const DashboardProfile = () => {
  const[ChangeAvatar, setChangeAvatar] = React.useState(null);
  const changeImage = (e) => {
    setChangeAvatar(e.target.files[0])
  }
  return (
    <div className='flex flex-col '>
      <div className='flex items-center gap-12'>

        <div>
        <div className='size-[20vh] border rounded-full'>
          <label className='w-[100%] h-[100%] flex items-center justify-center' htmlFor='imgFile'>
            {ChangeAvatar ?(<img src={URL.createObjectURL(ChangeAvatar)} alt='' className='size-[100%]  object-cover'/>):(<FaUser className='size-[12vh] text-zinc-600'/>)}
            
            </label>
        </div>
       <div>
         <input type='file' id='imgFile' accept='.jpeg, .jpg, .png' hidden
        onChange={changeImage} />
         <button className='bg-blue-600 hover:bg-zinc-700 transition-all duration-300  text-white px-8 py-2 rounded mt-5'>Change Avatar</button>
         </div>
        </div>
        <div>
          <p className='text-zinc-700'>iamankumardiwakar@gmail.com</p>
          <h1 className='text-5xl mt-2 font-semibold'>Aman Diwakar</h1>
          </div>
        </div>
        <hr className='my-8'/>
      <div>
        <h1 className='text-2xl font-semibold'>Change account's password</h1>
        <form action='' className='my-4 flex flex-col gap-4'>
      <div className='flex flex-col '>
      <label htmlFor='name' className='text-zinc-700'>Current Password
       
        </label>
        <input
              type="password"
              name="password"
              className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
      </div>
      <div className='flex flex-col mt-4'>
      <label htmlFor='name' className='text-zinc-700'>New Password
       
        </label>
        <input
              type="password"
              name="newpassword"
              className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
      </div>
      <div className='flex flex-col mt-4'>
      <label htmlFor='name' className='text-zinc-700'>Confirm New Password
       
        </label>
        <input
              type="password"
              name="confirmnewpassword"
              className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
      </div>
      <div className='mt-4'><button className='bg-blue-600  hover:bg-blue-700 transition-all duration-300  text-white px-8 py-2 rounded mt-5'>Update Password</button></div>
        </form>
      </div>
    </div>
  )
}

export default DashboardProfile