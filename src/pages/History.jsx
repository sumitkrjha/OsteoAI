import React from 'react'
import HistoryDisplay from '../components/HistoryDisplay'


const History = () => {
  return (
    <>
       <div id="contentWrapper" className='bg-white h-full max-[660px]:h-[98%] max-[570px]:w-[90%] max-[530px]:w-[85%] p-6 border-2 border-gray-300 rounded-2xl hover:shadow-lg '>
          <h2 className='font-bold text-3xl text-gray-800 mb-2'>History</h2>
          <HistoryDisplay/>
      </div>
    </>
  )
}

export default History