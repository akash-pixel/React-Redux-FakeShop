import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((products)=>{
        const {id, title, image, price, category} = products;

        return (
            <div className='four columns wide' key={id}>
                <Link to={`/product/${id}`}>
                    <div className='ui cards link'>
                        <div className='ui card'>
                            <div className='image'><img src={image} alt={title} style={{height:"250px",width:"contain"}} /></div>
                            <div className='content'>
                                <div className='header'>{title}</div>
                                <div className='meta price'>$ {price}</div>
                                <div className='meta'>{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>        
        )
    })

  return (
    <>
        {renderList}
    </>
  )
}

export default ProductComponent