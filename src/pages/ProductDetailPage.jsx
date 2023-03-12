import React ,{useState, useEffect} from 'react';
import axios from '../utilities/axios';
import {useResolvedPath} from 'react-router-dom';
import '../styles/ProductDetailPage.css'

function ProductDetailPage(props) {

    const resolvd = useResolvedPath();
    const [product,setProduct] = useState({});

  
        useEffect(()=>{
            async function fectchData(){
                const request = await axios.get(resolvd.pathname);
               setProduct(request.data);
               return request;
            }
            fectchData();
        },[resolvd.pathname])
   

    return (
        <div>
            <div className="container-3">

                <div className="image-panel">

                    <div className="container-1">
                        <div className="row">
                            <div className="col">
                                <img className="img-props" src={product.image} alt="" />
                            </div>
                            <div className="col">
                                <img className="img-props" src={product.image} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img className="img-props" src={product.image} alt="" />
                            </div>
                            <div className="col">
                                <img className="img-props" src={product.image} alt="" />
                            </div>
                        </div>
                       
                    </div>
                </div>


                <div className="details-panel mx-3">

                    <h3 className='title fw-bold'>{product.title}</h3>

                    <p className="sub-title">{product.title}</p>


                        {product.rating && <div className="rating w-50 d-flex border border-light-subtle ">
                            <div className='fw-bold text-center w-50  '>{product &&  product.rating.rate }</div>
                            <div className='w-50 text-center'>{product && product.rating.count} Ratings</div>
                        </div> }
                    

                    <div className='price fw-bold fs-2'>{product.price}</div>
                    {product.category && product.category===`men's clothing` &&<div className='size-buttons-container w-50'>
                        <div className="size-buttons-header d-flex">
                            <div className='ml-4'>SELECT SIZE</div>
                            <div>SIZE CHART</div>
                        </div>
                        <div className="size-buttons d-flex ">
                            <div className="size-button ">30</div>
                            <div className="size-button ">32</div>
                            <div className="size-button ">34</div>
                            <div className="size-button ">36</div>

                        </div>
                    </div>}
                    <div className="button-grp">
                        <button type="button" className="btn pdp-add-to-bag btn-primary btn-lg">ADD TO BAG</button>                    
                        <button type="button" className="btn btn-lg btn-outline-secondary mb-7">WISHLIST</button>
                    </div>

                    <h4>DELIVERY OPTIONS</h4>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Pincode" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="delivery_options">
                        <p>100% Original Products</p>
                        <p>Pay on delivery might be available</p>
                        <p>Easy 14 days returns and exchanges</p>
                        <p>Try & Buy might be available</p>
                    </div>

                    <h4>PRODUCT DETAILS </h4>

                    <p className='general-text-properties'>{product.description}</p>
                 
                </div>





            </div>
        </div>
    );
}

export default ProductDetailPage;