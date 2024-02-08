import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className='lg:grid lg:grid-cols-2 p-2 md:h-24 sm:h-80
             sm:grid grid-rows-2'>
                <div className=' col-span-1'>
                    <Link to="/">
                        <div className=' uppercase
                     font-bold font-sans text-lg justify-start p-2'>Sunaina Tiwari</div>
                    </Link>
                </div>
                <div className=' col-span-1'>
                    <div className='md:grid grid-cols-4 justify-center
                     sm:grid-rows-4'>
                        <NavLink to="/" >
                            <div className=' hover:text-red-600 
                     font-semibold text-lg hover:underline decoration-red-600
                      p-1'>About</div>
                        </NavLink>
                        <div className=' hover:text-red-600 
                     font-semibold text-lg hover:underline decoration-red-600
                      p-1'>
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </div>

                        <div className=' hover:text-red-600 
                     font-semibold text-lg hover:underline decoration-red-600
                      p-1'>
                            <NavLink to='/resume'>
                                Resume
                            </NavLink>
                        </div>
                        <div className=' hover:text-red-600 
                       font-semibold text-lg hover:underline decoration-red-600
                       p-1'>
                            <NavLink to="/linkedin">
                                LinkedIn
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header