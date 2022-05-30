import React from 'react'
import './FooterComponent.css'
import pic  from '../Assets/Footer.png'

function FooterComponent() {
    return (
        <section className='Footer container'>
           <img className='footer' src={pic} alt="footer" />
        </section>
       
    )
}

export default FooterComponent