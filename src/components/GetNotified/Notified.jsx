import React from 'react'
import './Notified.css'
const Notified = () => {
  return (
    <div id='getNotified'>
        <div className="notifiedContainer">

         <div className='leftNotified'>
            <h2>Get notified when we update!</h2>
            <p>Get notified when we update any new items to our special menu, update our price list of have promos! </p>
         </div>
         <div className="rightNotified">
            <input className='emailNotified' type="email" placeholder='example@gmail.com' />
            <input className='submitNotified' type='text' placeholder='Get Notified' />
         </div>
        </div>
    </div>
  )
}

export default Notified