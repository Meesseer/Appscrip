import React from 'react'
import './Connect.css'
import Currency from './Language.png'

function Connect() {
  return (
    <div>
        <div className='connect-container'>
            <div className='connect-email'>
                <h3>BE THE FIRST TO KNOW</h3>
                <p>Sign up for updates from mette muse.</p>
                <input type='text' placeholder='Enter You Email..'></input>
                <button>Subscribe</button>
            </div>
            <div className='connect-contact'>
                <h3>CONTACT US</h3>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
                <h3> Currency</h3>
                <img src={Currency} alt='USA Flag'></img>
                <p>Transactions will be completed in Euros and a Currency reference is avaiable on hover</p>
            </div>
            <div className='connect-border'></div>
        </div>
    </div>
  )
}

export default Connect