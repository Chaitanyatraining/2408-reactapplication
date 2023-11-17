import React from 'react'
import '../extstyles.css'
import ModuleStyles from './moduleStyling.module.css'

const StylingComp = () => {
    const InternalStyles = {
        btnstyles:{
            backgroundColor: 'blue',
            padding:'10px',
            border:'none',
            fontSize:'20px',
            color:'white'
        },
        parastyles:{
            backgroundColor:'orange',
        }
    }
  return (
    <div>
        {/* 
            - inline 
            - Internal 
            - external
            - modulecss
        */}
        <h2>Styling Component</h2>
        <h4 style={{color:'red', backgroundColor:'green'}}>This is Inline Styles</h4>
   
        {/* internal styles */}
        <button style={InternalStyles.btnstyles}>Internal Button</button>
        <p style={InternalStyles.parastyles}>This is para</p>        
        <div className='head1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda beatae fugiat corrupti labore dolor officia, porro, rerum atque sit mollitia itaque nobis eveniet voluptatem!
        </div>

        <section className={ModuleStyles.secStyle}>This is External Stylings</section>
        <button className='btn btn-primary'>click Here</button>
    </div>
  )
}

export default StylingComp