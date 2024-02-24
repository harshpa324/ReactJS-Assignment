import React from 'react'
import './nav.css'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <>
            <div className='d-flex align-items-center'>
                <div className='container-fluid position-static'>
                    <nav>
                        <ul className='list list-inline'>
                            <li className='list-inline-item'>
                                <div className='search'>
                                    <input type='text'  />
                                    <SearchIcon className="searchIcon cursor" />
                                </div>
                            </li>
                            <li className='list-inline-item'>Categories</li>
                            <li className='list-inline-item'>Website Builders</li>
                            <li className='list-inline-item'>Today's Deals</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar