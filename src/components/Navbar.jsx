import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

export function Navbar(props) {

    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()

    const activeStyles = {
        color: '#105442',
    }

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Вы вышли из системы')
    }



    return (
        <div className='flex py-1 px-8 gradientTop shadowCustom justify-between items-center'>
            <img className='mx-10 h-24' src={`${process.env.REACT_APP_DOMAIN}/static/logo-calc.png`} alt="Cold room calculator" />

            {isAuth && (
                <ul className='flex gap-8'>
                    <li>
                        <NavLink
                            to={'/'}
                            className=' text-[#1c7b62] hover:text-[#105442]'
                            style={({ isActive }) =>
                                isActive ? activeStyles : undefined
                            }
                        >
                            Main
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/about'}
                            className=' text-[#1c7b62] hover:text-[#105442]'
                            style={({ isActive }) =>
                                isActive ? activeStyles : undefined
                            }
                        >
                            About
                        </NavLink>
                    </li>

                </ul>
            )}

            <div className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2'>
                {isAuth ? (
                    <button onClick={logoutHandler}>Sign Out</button>
                ) : (
                    <Link to={'/login'}> Sign In </Link>
                )}
            </div>
        </div>
    );
}

