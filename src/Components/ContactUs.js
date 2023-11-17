import React from 'react'

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handle submit clicked')
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    } 

    return (
        <div>
            <h2>ContactUs</h2>
            <form>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <div className='mt-1'>
                            <input 
                            type="text" 
                            className='form-control'
                            placeholder='Enter your first Name'
                            name="firstName"
                            onChange={(e) => handleChange(e)}
                            // value={}
                             />
                        </div>
                        <div className='mt-1'>
                            <input 
                            type="text" 
                            className='form-control'
                            placeholder='Enter your last Name'
                            name="lastName"
                            onChange={handleChange}
                             />
                        </div>
                        <div className='mt-1'>
                            <input 
                            type="text" 
                            className='form-control'
                            placeholder='Enter your email'
                            name="email"
                            onChange={handleChange}
                             />
                        </div>
                        <div className='mt-1'>
                            <input 
                            type="text" 
                            className='form-control'
                            placeholder='Enter your phone'
                            name="phone"
                            onChange={handleChange}
                             />
                        </div>
                        <button className='btn btn-primary mt-2' 
                        onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </form>
        </div>
    )
}

export default ContactUs