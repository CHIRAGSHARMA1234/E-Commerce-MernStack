import React from 'react'
const Signup = () => {
    return (
        <div className='login-page d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
            <div className='form-container bg-white p-5 rounded'>
                <form>
                    <h3 className='text-center'>Sign Up</h3>
                    <div className='mb-2'>
                        <label htmlFor='name'>fName</label>
                        <input
                            type='text'
                            placeholder='Enter fName'
                            className='form-control d-inline'
                            id='name' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lName'>lName</label>
                        <input
                            type='text'
                            placeholder='Enter  lName'
                            className='form-control'
                            id='lName' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            className='form-control'
                            id='email'
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='Profile'>Profile Pic</label>
                        <input
                            type='number'
                            placeholder='Enter Your Number'
                            className='form-control'
                            id='Profile' />
                    </div>
                 
                    <div className='mb-2'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            className='form-control'
                            id='password'
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='add'>Address</label>
                        <input
                            type='number'
                            placeholder='Entem Your Address'
                            className='form-control'
                            id='add' />
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary '>Sign Up</button>
                    </div>
                    <p className='text-end mt-2'>
                        Already Registered<a href='#'> Sign In </a>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Signup
