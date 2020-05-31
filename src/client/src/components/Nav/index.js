import React from 'react';
import { Link } from 'react-router-dom'
import { useGlobalState } from "hooks/useGlobalState";

export const Nav = () => {
    const [state, ] = useGlobalState();
    console.log(state, '!!!@@@')
    return (
        <>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="#">Cart<sup>{state.cart.total}</sup></Link></li>
                <li><Link to="/signin">Signin</Link></li>
                <li><Link to="#">Signout</Link></li>
            </ul>
        </div>
        </>
    )
}
