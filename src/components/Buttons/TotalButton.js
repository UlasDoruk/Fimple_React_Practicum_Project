import React, { useContext } from 'react'
import ContainerContext from '../Context/ContainerContext'
import "./TotalButton.css"

function TotalButton() {
    
  // flag state'i tablonun altındaki toplan ödenecek miktarı gösteren kartın tetikleyicisi konumunda 
  const {flag,setFlag} = useContext(ContainerContext)

  return (
    <div>
        <button className='btn btn-primary' onClick={()=>setFlag(flag === true ? false : true)}>SHOW TOTAL PAYMENTS</button>
    </div>
  )
}

export default TotalButton