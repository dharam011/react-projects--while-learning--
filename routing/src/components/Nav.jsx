import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className="nav flex gap-10 justify-center text-md font-thin text-white">
                <ul className="flex gap-10 pt-10">
                    <li>
                        <NavLink  className={({isActive}) =>   `block  bg-amber-500 p-4 font-thin ${isActive ?"text-black": "text-white"} ` 
                        } 
                            to="/"> Home
                        </NavLink>
                    </li>
                    <li>
                        
                        <NavLink  className={({isActive}) =>   ` block p-4 font-thin bg-amber-500  ${isActive ?"text-black": "text-white"} ` 
                        }
                       to="/about"
                         > About us
                    </NavLink>
                    </li>
                    <li>
                        <NavLink   className={({isActive}) =>   ` block bg-amber-500 p-4 font-thin ${isActive ?"text-black": "text-white"} ` 
                        }
                            to="/contact"
                            > Contact us
                        </NavLink>
                    </li>
                     <li>
                        <NavLink   className={({isActive}) =>   ` block bg-amber-500 p-4 font-thin ${isActive ?"text-black": "text-white"} ` 
                        }
                            to="/addcard"
                            > Add People
                        </NavLink>
                    </li>
                </ul>
            </div>



        </>
    )
}

export default Nav