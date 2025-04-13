import React from 'react'
import './Footer.css'
import Insta from './Insta.png'
import LinkedIn from './a.png'
import Gpay from './Gpay.png'
import MasterCard from './MasterCard.png'
import Paypal from './PayPal.png'
import Amex from './Amex.png'
import ApplePay from './ApplePay.png'
import Opay from './Opay.png'

function Footer() {
  return (
    <div>
      <div className='footer-container'>
        <div className='mettamuse-links'>
          <h3>metta muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Complainces Docs</li>
            </ul>
        </div>
        <div className='quick-links'>
          <h3>Quick Links</h3>
            <ul>
              <li>Orders & Shopping</li>
              <li>Join/Login as a seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
        </div>
        <div className='followpay-container'>
          <div className='follow'>
            <h3>FOLLOW US</h3>
            <span>
              <img src={Insta} alt='Instagram icon'></img>
              <img src={LinkedIn} alt='LinkedIn icon'></img>
            </span>
          </div>
          <div className='pay-links'>
            <h3>metta muse ACCEPTS</h3>
            <span>
              <img src={Gpay} alt='Gpay icon'></img>
              <img src={MasterCard} alt='MasterCard icon'></img>
              <img src={Paypal} alt='Paypal icon'></img>
              <img src={Amex} alt='Amex icon'></img>
              <img src={ApplePay} alt='ApplePay icon'></img>
              <img src={Opay} alt='Opay icon'></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer