import React,{useState, useEffect} from 'react';
import "../styles/ProductListing.css";
import { useLocation } from 'react-router-dom';
import axios from '../utilities/axios';
import Card from '../components/Card';
import {paginate} from '../utilities/paginate.js'

import Pagination from '../components/Pagination';


function ProductListing(props) {
    const location = useLocation();
    const [currentPage,setCurrentPage] = useState(1);
    const [products,setProducts] = useState([]);
    const [prod,setProd] = useState([]);
    const pageSize=2;
    useEffect(()=>{
        async function fectchData(){
            const request = await axios.get(location.pathname);
           setProducts(request.data);    
           setProd(paginate(request.data,currentPage,pageSize));     
           return request;
        }
        fectchData();
   
    },[currentPage])
    const handleClick= (id)=>{
     }
     const handlePageChange=(page) =>{
       setCurrentPage(page);
     }


    return (
        <div className='container-2'>


            <div className="container-1">
                <h1>SIDEBAR COMES HERE</h1>
               

            </div>


            <div className="product_listing">
                <div className="container-1">
                    <div className="row">
                        {prod.map(product=>(     
                    
                        <div key={product.id} className='col'> <Card image={product.image} price={product.price}className="mx-auto" key={product.id} id={product.id} name={product.title} onClick={()=>{handleClick(product.id)}}/>  </div>                 
                            
                        ))}      
                    </div>   
                </div>
                <Pagination itemsCount={products.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/> 
            </div>
                        
                           

        </div>
    );
}

export default ProductListing;