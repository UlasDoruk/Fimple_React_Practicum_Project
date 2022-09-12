import React, { useContext } from 'react'
import InputContext from '../Context/InputContext'

function TotalButton() {
    
    const {flag,setFlag} = useContext(InputContext)

  return (
    <div>
        <button className='btn btn-warning' onClick={()=>setFlag(flag === true ? false : true)}>Show Total Payments</button>
    </div>
  )
}

export default TotalButton