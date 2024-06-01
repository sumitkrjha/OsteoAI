import React from 'react'
import ProfileForm from '../components/ProfileForm'

const Profile = () => {
  return (
    <>
        <div id="contentWrapper" className='bg-white h-full max-[660px]:h-[98%] max-[570px]:w-[90%] max-[530px]:w-[85%] max-[400px]:w-[103%] p-6 border-2 border-gray-300 rounded-2xl hover:shadow-lg '>
            <h2 className='font-bold text-3xl text-gray-800 mb-2 max-[400px]:text-2xl'>Profile</h2>
            <p className=' text-base text-gray-600 mb-5 max-[400px]:text-md max-[400px]:mb-1'>Manage your profile information. Keep your profile up-to-date.</p>
            <ProfileForm/>
        </div>   
    </>
  )
}

export default Profile