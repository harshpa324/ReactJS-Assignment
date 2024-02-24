import React from 'react'
import './style.css'
import Img from '../images/img1.png'
import Button from '@mui/material/Button';

const Deals = () => {
    return (
        <>
            <div className='dealsPage mt-5'>
                <div className='container'>
                    <h1>Related deals you might like for</h1>
                    <div className='row dealsRow mt-5'>
                        <div className='card'>
                            <img src={Img} alt='' />
                            <div className='d-flex'>
                                <Button className='off'>20% Off</Button>
                                <Button className='off'>Limited Time</Button>
                            </div>
                            <h5>Web Builder 1</h5>
                            <p className='mt-2'>Computer Modern classic with wix support</p>
                            <div className='cost d-flex'>
                                <h4>$39.96 &nbsp; </h4>
                                <p>$49.96 &nbsp; </p>
                                <p style={{ color: 'red' }}>(20% Off)</p>
                            </div>
                            <Button className='dealButton bg-primary mt-2 mb-4'>View Deal</Button>
                        </div>
                        <div className='card'>
                            <img src={Img} alt='' />
                            <div className='d-flex'>
                                <Button className='off'>20% Off</Button>
                                <Button className='off'>Limited Time</Button>
                            </div>
                            <h5>Web Builder 2</h5>
                            <p className='mt-2'>Computer Modern classic with wix support</p>
                            <div className='cost d-flex'>
                                <h4>$39.96 &nbsp; </h4>
                                <p>$49.96 &nbsp; </p>
                                <p style={{ color: 'red' }}>(20% Off)</p>
                            </div>
                            <Button className='dealButton bg-primary mt-2 mb-3'>View Deal</Button>
                        </div>
                        <div className='card'>
                            <img src={Img} alt='' />
                            <div className='d-flex'>
                                <Button className='off'>20% Off</Button>
                                <Button className='off'>Limited Time</Button>
                            </div>
                            <h5>Web Builder 3</h5>
                            <p className='mt-2'>Computer Modern classic with wix support</p>
                            <div className='cost d-flex'>
                                <h4>$39.96 &nbsp; </h4>
                                <p>$49.96 &nbsp; </p>
                                <p style={{ color: 'red' }}>(20% Off)</p>
                            </div>
                            <Button className='dealButton bg-primary mt-2 mb-3'>View Deal</Button>
                        </div>
                    </div>

                    <div className='row signUpRow mt-5 mb-5 mr-5 ml-5'>
                        <div className='col-sm-6'>
                            <h1>Sign up and get exclusive special deals</h1>
                        </div>
                        <div className='col-sm-6 signup mt-3 pl-5'>
                            <input type='text' />
                            <Button className='bg-primary'>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deals