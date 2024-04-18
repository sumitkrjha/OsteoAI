import React from 'react'
import DashboardNavbar from '../components/DashboardNavbar'
import Footer from '../components/Footer'
import DashboardScreen from '../components/DashboardScreen'

const Dashboard = () => {
  return (
    <>
        <DashboardNavbar/>
        <DashboardScreen/>
        <Footer/>
    </>
  )
}

export default Dashboard