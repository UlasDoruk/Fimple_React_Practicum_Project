import React, { useContext } from 'react'
import InputContext from '../Context/InputContext'
import "./TotalButton.css"

function TotalButton() {
    
    const {flag,setFlag} = useContext(InputContext)

  return (
    <div>
        <button className='btn btn-primary' onClick={()=>setFlag(flag === true ? false : true)}>SHOW TOTAL PAYMENTS</button>
    </div>
  )
}

export default TotalButton