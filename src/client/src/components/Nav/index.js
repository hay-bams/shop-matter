import React from 'react';
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/signin">Signin</Link></li>
                <li><Link to="#">Signout</Link></li>
            </ul>
        </div>
        </>
    )
}
