import React from 'react'
import './style.css'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Footer = () => {
    return(
        <>
            <div className='footerPage pb-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <h3 className='ml-5 mt-5 mb-3'>CATEGORIES</h3>
                            <ul className='ml-2'>
                                <li>Web Builder</li>
                                <li>Hosting</li>
                                <li>Data Center</li>
                                <li>Robotic-Automation</li>
                            </ul>
                        </div>
                        <div className='col-sm-4'>
                            <h3 className='ml-5 mt-5 mb-3'>CONTACT</h3>
                            <ul className='ml-2'>
                                <li>Contact</li>
                                <li>Privacy Policy</li>
                                <li>Terms Of Service</li>
                                <li>Categories</li>
                                <li>About</li>
                            </ul>
                        </div>
                        <div className='col-sm-4'>
                            <p>United States &nbsp; <KeyboardArrowDownOutlinedIcon /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer