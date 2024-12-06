import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { clearProductDetails, fetchProductDetails } from '../services/productSlice';

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { productDetails: product, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProductDetails(id));

        return () => {
            dispatch(clearProductDetails()); 
        };
    }, [dispatch, id]);
  
    if (loading) return <div><Loader/></div>;
    if (!product) return <div>Product not found.</div>;
  return (
    <div className="container mx-auto p-6">
    <div className="max-w-lg mx-auto border rounded-lg shadow-lg p-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 w-full object-contain mb-6"
      />
      <h2 className="text-2xl font-bold mb-4 text-center">{product.title}</h2>
      <p className="text-gray-700 text-sm mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-gray-800 mb-6 text-center">
        ${product.price}
      </p>
      <button
        className="bg-[#319795] text-white px-6 py-3 rounded w-full hover:bg-[#319795] transition font-bold"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  </div>
  )
}

export default ProductDetail