import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { removeSelectedProducts, selectedProducts } from "../redux/actions/productAction"

function ProductDetail() {
  const product = useSelector((state)=> state.product);
  const {image, title, price, category,description} =product;
  const {productId} =  useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async() =>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => {
        console.log("Err", err);
      })

      dispatch( selectedProducts(response.data) );
  }

  useEffect(() => {
    if(productId && productId !== "") fetchProductDetail();
    return ()=>{
      dispatch(removeSelectedProducts());
    }

  },[productId]);

  return (
    <div className='ui grid container' style={{marginTop:"2rem"}} >
      {Object.keys(product).length === 0 ? 
        (<h1>Loading...</h1>) : 
        (<div className='ui placeholder segment'>
          <div className='ui two column stackable center aligned grid'>
            <div className='ui vertical divider'>AND</div>
            <div className='middle aligned row'>
              <div className='column 1p'>
                <img className='ui fluid image' src = {image}/>
              </div>
              <div className='column rp'>
                <h1>{title}</h1>
                <h2>
                  <a className='ui teal tag label'>${price}</a>
                </h2>
                <h3 className='ui brown black header'>{category}</h3>
                <p>{description}</p>
                <div className='ui vertical animated button' tabIndex="0">
                  <div className='hidden content'>
                    <i className='shop icon'></i>
                  </div>
                  <div className='visible content'>Add to Cart</div>
                </div>
              </div>    
            </div>
          </div>
        </div> )
      }
    </div>
  )
}

export default ProductDetail