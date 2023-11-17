import React from 'react'
import ListAndKeys from './ListAndKeys';
import ContactUs from './ContactUs';

const ConditionalRenderingComp = () => {
    let age = 16;
    // if(age >= 18){
    //     return <h4>Eligible to Vote</h4>
    // } else {
    //     return <h4>Not Eligible to Vote</h4>
    // }
    let user = false
    return (
        <>
            <h2>ConditionalRenderingComp</h2>
        {
        (user === true) ? <ListAndKeys /> : <ContactUs />    
        }
        </>
    )
}

export default ConditionalRenderingComp