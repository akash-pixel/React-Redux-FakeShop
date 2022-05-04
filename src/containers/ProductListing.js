import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productAction'
import ProductComponent from './ProductComponent';

function ProductListing() {
    const products = useSelector((state)=> state)
    const dispatch = useDispatch();

    const fetchProducts = async() =>{
      const response = await axios.get("https://fakestoreapi.com/products")
        .catch(err=>{ console.log(err) });
      dispatch(setProducts(response.data));
    }

    useEffect(()=>{
      fetchProducts();
    },[]);

  return (
    <div className='ui grid container' style={{marginTop:"2rem"}}>
        <ProductComponent  />
    </div>
  )
}

export default ProductListing