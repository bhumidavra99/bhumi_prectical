import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
});

export const fetchProductDetails = createAsyncThunk(
    'products/fetchProductDetails',
    async (id) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [], 
        productDetails: null,
        loading: false, 
    },
    reducers: {
        clearProductDetails: (state) => {
            state.productDetails = null; 
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = false;
            })


            
            .addCase(fetchProductDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.productDetails = action.payload;
            })
            .addCase(fetchProductDetails.rejected, (state) => {
                state.loading = false;
            });
    },
});
export const { clearProductDetails } = productSlice.actions;

export default productSlice.reducer;
