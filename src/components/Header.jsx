import React from 'react'
import { NavLink } from 'react-router'
import Counter from './Counter'

function Header() {
    return (
        <div className='bg-gray-300'>
            <div className='max-w-6xl mx-auto px-5'>
                <div className='py-2 flex justify-between '>
                    <NavLink to='/'><img src="/images/news.png" alt="" className='w-20 hover:scale-105 duration-300' /></NavLink>
                    <div>
                        <h2><Counter /></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
