import React, { useContext } from 'react'
import ContainerContext from '../Context/ContainerContext'
import "./TotalButton.css"

function TotalButton() {
    
    const {flag,setFlag} = useContext(ContainerContext)

  return (
    <div>
        <button className='btn btn-primary' onClick={()=>setFlag(flag === true ? false : true)}>SHOW TOTAL PAYMENTS</button>
    </div>
  )
}

export default TotalButton