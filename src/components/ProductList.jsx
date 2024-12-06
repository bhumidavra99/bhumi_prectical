import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../services/productSlice';

const ProductList = () => {
    const navigate = useNavigate()
    const { addToCart } = useContext(CartContext);
    const dispatch = useDispatch();
    const { items: products, loading } = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <div><Loader /></div>;
    return (
        <div className='container max-w-7xl mx-auto mt-10'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
                {products?.map((product) => {
                    return <div
                        key={product.id}
                        className="border  rounded-md shadow"
                    ><div className='border-b-2 border-[#319795] p-4 flex flex-col justify-between h-full'>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-48 w-full object-contain"
                            />
                            <h3 className="text-lg font-bold mt-6">{product.title}</h3>
                            <div className="mt-auto">
                                <p className="mb-2">
                                    <span className="font-bold">Price:</span> ${product.price}
                                </p>
                                <div className="">
                                    <button
                                        className="bg-[#319795] text-white px-4 py-2 rounded w-full font-bold"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        className="border border-[#319795] text-[#319795] px-4 py-2 w-full rounded font-bold mt-3"
                                        onClick={() => navigate(`/product/${product.id}`)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProductList