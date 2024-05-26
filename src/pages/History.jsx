import React from 'react'
import HistoryDisplay from '../components/HistoryDisplay'


const History = () => {
  return (
    <>
       <div id="contentWrapper" className='bg-white h-full p-6 border-2 border-gray-300 rounded-2xl hover:shadow-lg '>
          <h2 className='font-bold text-3xl text-gray-800 mb-2'>History</h2>
          <HistoryDisplay/>
      </div>
    </>
  )
}

export default History