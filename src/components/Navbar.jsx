import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import axios from 'axios'
import { MdDashboardCustomize } from 'react-icons/md'

function Navbar() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("/category.json")
            .then(res => {
                setData(res.data.categories)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='max-w-6xl mx-auto px-5 '>
            <div className='py-2 flex justify-between items-center border-b-2 border-gray-300'>

                {/* Categories */}
                <div
                    className="
                        flex gap-2 
                        overflow-x-auto 
                        whitespace-nowrap 
                        scrollbar-hide 
                        max-w-[70%]
                        md:max-w-full
                    "
                >
                    {data.map(item => (
                        <NavLink
                            key={item.id}
                            to={`/category/${item.slug}`}
                            className={({ isActive }) =>
                                `md:px-1 py-1 rounded 
                                ${isActive
                                    ? "font-semibold text-blue-500"
                                    : "text-gray-700 hover:text-blue-500"}`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Right Menu */}
                <div className='flex gap-2 md:gap-4 items-center shrink-0 pl-3'>
                    <NavLink
                        to='/privacy'
                        className={({ isActive }) =>
                            isActive ? "font-bold text-blue-500" : "text-gray-700 hover:text-blue-500"}>
                        Privacy
                    </NavLink>
                    <NavLink
                        to='/login'
                        className={({ isActive }) =>
                            isActive ? "font-bold text-blue-500" : "text-gray-700 hover:text-blue-500"}>
                        Login
                    </NavLink>
                    <NavLink
                        to='/adminDashboard'
                        className={({ isActive }) =>
                            isActive ? "font-bold text-blue-500" : "text-gray-700 hover:text-blue-500"}>
                        <MdDashboardCustomize size={22} />
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default Navbar
