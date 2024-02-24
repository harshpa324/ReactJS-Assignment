import React from 'react'
import './style.css'
import Button from '@mui/material/Button';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const Header = () => {
    return (
        <>
            <div className='headerPage mt-4'>
                <div className='container'>
                    <h1>Best Website builders in the US</h1>
                    <hr />
                    <ul className='breadcrumb'>
                        <li><CheckCircleOutlineOutlinedIcon />Last Updated ~ February 22, 2020</li>
                        <li><InfoOutlinedIcon />Advertising Disclosure</li>
                    </ul>
                    <hr />
                    <div className='row buttonRow mt-4'>
                        <div className='col-sm-2'>
                            <Button>Tools</Button>
                        </div>
                        <div className='col-sm-2'>
                            <Button>AWS Builder</Button>
                        </div>
                        <div className='col-sm-2'>
                            <Button>Start Build</Button>
                        </div>
                        <div className='col-sm-2'>
                            <Button>Build Supplies</Button>
                        </div>
                        <div className='col-sm-2'>
                            <Button>Tooling</Button>
                        </div>
                        <div className='col-sm-2'>
                            <Button>Blue Hosting</Button>
                        </div>
                    </div>

                    <ul className='breadcrumb mt-4'>
                        <li>Home</li>
                        <li><ChevronRightOutlinedIcon /></li>
                        <li>Hosting for all</li>
                        <li><ChevronRightOutlinedIcon /></li>
                        <li>Hosting</li>
                        <li><ChevronRightOutlinedIcon /></li>
                        <li>Hosting6</li>
                        <li><ChevronRightOutlinedIcon /></li>
                        <li>Hosting5</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header