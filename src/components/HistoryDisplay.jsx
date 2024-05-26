import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../pages/Dashboard'
import "../App.css"

const HistoryDisplay = () => {
    
    const {user} = useContext(UserContext);
    const [tumorData, setTumorData] = useState([])
    const [fractureData, setFractureData] = useState([])
    const [tumorMessage, setTumorMessage]=useState(true)
    const [fractureMessage, setFractureMessage]=useState(true)
    const [isLoading, setIsLoading]=useState("")

    
    const loadTumorData = async()=>{
        setFilter("all")
        setIsLoading("true")
        try {
            const data=JSON.stringify({email:user.email})
            const response = await fetch('http://localhost:5100/find/returnTumor',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: data
            });
            const result=await response.json();
            console.log(result)
            if(result.data.length==0){
                setTumorMessage(false)
            }
            setTumorData(result.data)

            // To load the Fracture data
            const email=JSON.stringify({email:user.email})
            const res = await fetch('http://localhost:5100/get/returnFracture',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: email
            });
            const resultData=await res.json();
            console.log(resultData)
            if(result.data.length==0){
                setFractureMessage(false)
            }
            setFractureData(resultData.data)
            setIsLoading("false")

        } catch (error) {
            console.log('Error fetching tumor data')
        }
    }
    
    const tumorItems = tumorData.map((item) => ({
        id: "Tumor",
        name: item.patientName,
        number: item.patientNumber,
        url: item.resultImage,
        result: item.resultValue
      }));
    
    const fractureItems = fractureData.map((item) => ({
        id: "Fracture",
        name: item.patientName,
        number: item.patientNumber,
        url: item.resultImage,
        result: item.resultValue
      }));
      
      const [filter, setFilter]=useState("all");
       const filterFracture =()=>{
        setFilter("fracture");
       }
       const filterTumor=()=>{
        setFilter("tumor");
       }
       const all=()=>{
        setFilter("all");
       }
  return (
    <>
      <div id="wrapper" className='h-[95%] p-2'>
        <div id="controlContainer" className='h-20 w-full flex justify-between items-center px-2'>
            <button className='my-2 p-2 h-12 w-36 bg-[#FFF] border-2 border-[#3B2B3F] text-green-500 font-semibold rounded-xl hover:shadow-md hover:shadow-[#3B2B3F] hover:border-purply hover:text-green-300 hover:bg-[#3B2B3F]' onClick={loadTumorData}>Load Data</button>
            {(tumorMessage==true || fractureMessage==true) ? 
                <div className='my-2 ml-10 p-2 h-18 w-[60%] bg-[#FFF] border-2 border-[#3B2B3F] rounded-xl flex items-center justify-center gap-4 hover:shadow-md hover:shadow-[#3B2B3F]'>
                    <p className='text-lg font-bold text-[#3B2B3F]'>Filter :</p>
                    <button onClick={all} className='p-2 h-12 w-36 bg-[#FFF] border-2 border-[#3B2B3F] text-green-500 font-semibold rounded-xl hover:shadow-md hover:shadow-[#3B2B3F] hover:border-purply hover:text-green-300 hover:bg-[#3B2B3F] focus:shadow-md focus:shadow-[#3B2B3F] focus:border-purply focus:text-green-300 focus:bg-[#3B2B3F]'>All</button>
                    <button onClick={filterTumor} className='p-2 h-12 w-36 bg-[#FFF] border-2 border-[#3B2B3F] text-green-500 font-semibold rounded-xl hover:shadow-md hover:shadow-[#3B2B3F] hover:border-purply hover:text-green-300 hover:bg-[#3B2B3F] focus:shadow-md focus:shadow-[#3B2B3F] focus:border-purply focus:text-green-300 focus:bg-[#3B2B3F]'>Tumor</button>
                    <button onClick={filterFracture} className='p-2 h-12 w-36 bg-[#FFF] border-2 border-[#3B2B3F] text-green-500 font-semibold rounded-xl hover:shadow-md hover:shadow-[#3B2B3F] hover:border-purply hover:text-green-300 hover:bg-[#3B2B3F] focus:shadow-md focus:shadow-[#3B2B3F] focus:border-purply focus:text-green-300 focus:bg-[#3B2B3F]'>Fracture</button>
                </div>
                :<></>
            }
       </div>     
      

        {isLoading=="true" ? <div id="loader"></div>
            :
            <>
            <div id="itemContainer" className='h-[90%] w-full overflow-y-scroll p-2 grid grid-cols-3 gap-2'>
                {tumorMessage==true ? <> 
                {tumorItems.map((item) => (
                    <div id="container" className={(filter=="tumor" || filter=="all")? 'h-auto w-full border-2 border-[#3B2B3F] p-2 mb-2 rounded-xl shadow-md shadow-gray-600 flex flex-col items-center justify-center' :'hidden'} >
                        <h1 id="patientDetail" className=' font-semibold text-[#3B2B3F] text-xl'>{item.number}:{item.name}</h1>
                        <div >{item.result=="true" ? <div className='text-red-500 font-semibold text-lg flex justify-center'>Cancer Found</div>:<div className='text-green-700 font-semibold text-lg flex justify-center'>Cancer Not Found</div>}
                        <img src={item.url} alt="" />  
                        </div>
                    </div>
                ))}
                </>
                :
                <div className='text-red-500 font-bold text-xl'>No Tumor data found</div>
                }

                {fractureMessage==true ? <> 
                    {fractureItems.map((item) => (
                        <div id="container" className={(filter=="fracture" || filter=="all") ? 'h-auto w-full border-2 border-[#3B2B3F] p-2 mb-2 rounded-xl shadow-md shadow-gray-600 flex flex-col items-center justify-center' :'hidden'}>
                            <h1 id="patientDetail" className=' font-semibold text-[#3B2B3F] text-xl'>{item.number}:{item.name}</h1>
                            <div >{item.result=="true" ? <div className='text-red-500 font-semibold text-lg flex justify-center'>Fracture Found</div>:<div className='text-green-700 font-semibold text-lg flex justify-center'>Fracture Not Found</div>}
                            <img src={item.url} alt="" />  
                            </div>
                        </div>
                    ))}
                    </>
                    :
                    <div className='text-red-500 font-bold text-xl'>No Fracture data found</div>
                }
            </div>
        </>}
    </div>
    </>
  )
}

export default HistoryDisplay