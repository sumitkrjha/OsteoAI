import React from 'react'
import ProfileForm from '../components/ProfileForm'

const Profile = () => {
  return (
    <>
        <div id="contentWrapper" className='bg-white h-full p-6 border-2 border-gray-300 rounded-2xl hover:shadow-lg '>
            <h2 className='font-bold text-3xl text-gray-800 mb-2'>Profile</h2>
            <p className=' text-base text-gray-600 mb-5'>Manage your profile information. Keep your profile up-to-date.</p>
            <ProfileForm/>
        </div>   
    </>
  )
}

export default Profile