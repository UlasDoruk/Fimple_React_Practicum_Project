import React, { useContext } from 'react'
import InputContext from '../Context/InputContext'

function TotalButton() {

    const {showCard} = useContext(InputContext)

  return (
    <div>
        <button className='btn btn-warning' onClick={()=>showCard()}>Show Total Payments</button>
    </div>
  )
}

export default TotalButton