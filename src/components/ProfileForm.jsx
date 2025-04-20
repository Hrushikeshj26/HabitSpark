import React, { useState } from 'react'

const ProfileForm = ({ username, email }) => {
  return (
    <form className='space-y-4 '>
      <div className='w-full'>
        <label className='block text-sm font-medium text-white-700'>
          Username
        </label>
        <input
          type='text'
          name='name'
          value={username}
          className='mt-1 block text-black w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          readOnly
        />
      </div>
      <div className='w-full'>
        <label className='block text-sm font-medium text-white-700'>
          Email
        </label>
        <input
          type='text'
          name='name'
          value={email}
          className='mt-1 block text-black w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          readOnly
        />
      </div>
    </form>
  )
}

export default ProfileForm
