import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const Header = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="shadow-md h-[100px] flex items-center font-bold">
            <header className="container max-w-7xl flex justify-between mx-auto px-4">
                <h1 className="text-2xl">E-commerce</h1>
                <nav className="flex items-center">
                    <Link to="/" className="mx-3 text-lg">
                        Home
                    </Link>
                    <Link to="/cart" className="ms-3 text-lg">
                        Cart
                    </Link>
                    {cart?.length > 0 && <div className='w-[18px] h-[18px] flex justify-center items-center bg-[#319795] rounded-full mt-[-7px] ms-[-3px]'>
                        <p className="text-white  text-[10px]">
                            {cart.length}
                        </p>
                    </div>}
                </nav>
            </header>
        </div>
    )
}

export default Header