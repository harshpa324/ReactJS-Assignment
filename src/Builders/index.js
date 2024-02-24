import React from 'react'
import './style.css'
import Img from '../images/img1.png'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';


const Builders = () => {
    return(
        <>
            <div className='builderPage'>
                <div className='container mt-5'>
                    <div className='row builder'>
                        <span className='badge'><EmojiEventsOutlinedIcon /> &nbsp; Best Choice</span>
                        <span className='num'>1</span>
                        <div className='col-sm-3 part1'>
                            <img src={Img} alt='' />
                            <h5 className='mt-3'>Builder 1</h5>
                        </div>
                        <div className='col-sm-6 pt-3 part2'>
                            <p className='pt-3'><strong>WixPro 72-inch Responsive Website Builder- </strong>
                            Comprehensive  Digital Platform Creation Tool, Streamlined Design Interface for
                            Professional Websitesand Online Stores (Black/Blue).
                            </p>
                            <h6>Main highlights</h6>
                            <p className='pl-4'>[What You Get]: Receive the WixPro Website Builder Suite, access to premium design templates,
                            an extensive library of widgets and apps, and detailed step-by-step guides
                            </p>
                            <Button>Show more<KeyboardArrowDownIcon /></Button>
                        </div>
                        <div className='col-sm-3 d-flex flex-column part3'>
                            <div className='rating'>
                                <h1>9.8</h1>
                                <p className='mb-2'>Exceptional</p>
                                <Rating name="half-rating-read" defaultValue={5.0} precision={0.5} size='small' className='mt-0' readOnly />
                            </div>
                            <Button className='bg-primary mt-auto mb-3'>View</Button>
                        </div>
                    </div>

                    <div className='row builder mt-5'>
                        <span className='badge'><DiamondOutlinedIcon /> &nbsp; Best Value</span>
                        <span className='num'>2</span>
                        <div className='col-sm-3 part1'>
                            <img src={Img} alt='' />
                            <h5 className='mt-3'>Builder 2</h5>
                        </div>
                        <div className='col-sm-6 pt-3 part2'>
                            <p className='pt-3'><strong>SiteCraft 68-Inch Ultimate Web Design Studio -</strong> Advanced Site Creation
                            Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-Commerce Platforms (Green/White). 
                            </p>
                            <h6>Main highlights</h6>
                            <p className='pl-4'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection 
                            of design elemnts, SEO optimization tools, and e-commerce integrations.
                            </p>
                            <Button>Show more<KeyboardArrowDownIcon /></Button>
                        </div>
                        <div className='col-sm-3 d-flex flex-column part3'>
                            <div className='rating'>
                                <h1>9.5</h1>
                                <p className='mb-2'>Excellent</p>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                            </div>
                            <Button className='bg-primary mt-auto mb-3'>View</Button>
                        </div>
                    </div>

                    <div className='row builder mt-5'>
                        <span className='num'>3</span>
                        <div className='col-sm-3 part1'>
                            <img src={Img} alt='' />
                            <h5 className='mt-3'>Builder 3</h5>
                        </div>
                        <div className='col-sm-6 pt-3 part2'>
                            <p className='pt-3'><strong>WixPro 72-inch Responsive Website Builder- </strong>
                            Comprehensive  Digital Platform Creation Tool, Streamlined Design Interface for
                            Professional Websitesand Online Stores (Black/Blue).
                            </p>
                            <h6>Main highlights</h6>
                            <p className='pl-4'>[What You Get]: Receive the WixPro Website Builder Suite, access to premium design templates,
                            an extensive library of widgets and apps, and detailed step-by-step guides
                            </p>
                            <Button>Show more<KeyboardArrowDownIcon /></Button>
                        </div>
                        <div className='col-sm-3 d-flex flex-column part3'>
                            <div className='rating'>
                                <h1>9.3</h1>
                                <p className='mb-2'>Excellent</p>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={4.5} size='small' className='mt-0' readOnly />
                            </div>
                            <Button className='bg-primary mt-auto mb-3'>View</Button>
                        </div>
                    </div>

                    <div className='row builder mt-5'>
                        <span className='num'>4</span>
                        <div className='col-sm-3 part1'>
                            <img src={Img} alt='' />
                            <h5 className='mt-3'>CDK</h5>
                        </div>
                        <div className='col-sm-6 pt-3 part2'>
                            <p className='pt-3 mb-2'><strong>CDK Responsive Builder: </strong>
                            An extensive library of widgets and apps, detailed step-by-step guides
                            </p>
                            <Button className='off mb-2'>26% Off</Button>
                            <h6>Main highlights</h6>
                            <ul className='ul1'>
                                <li><Button>9.9</Button> &nbsp; Building Resonsive</li>
                                <li><Button>9.9</Button> &nbsp; Cool</li>
                                <li><Button>9.9</Button> &nbsp; Docs</li>
                            </ul>  
                            <h6>Why we love it</h6> 
                            <ul className='ul2 pl-1'>
                                <li><DoneOutlinedIcon /> &nbsp; Documentation</li>    
                                <li><DoneOutlinedIcon /> &nbsp; Easy Use</li>    
                                <li><DoneOutlinedIcon /> &nbsp; Out Of Box</li>    
                            </ul>                         
                            <Button>Show more<KeyboardArrowDownIcon /></Button>
                        </div>
                        <div className='col-sm-3 d-flex flex-column part3'>
                            <div className='rating'>
                                <h1>9.1</h1>
                                <p className='mb-2'>Good</p>
                                <Rating name="half-rating-read" defaultValue={4.0} precision={4.5} size='small' className='mt-0' readOnly />
                            </div>
                            <Button className='bg-primary mt-auto mb-3'>View</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Builders