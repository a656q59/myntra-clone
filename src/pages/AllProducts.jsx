import React,{useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "../utilities/axios" ;
import Card from '../components/Card';
import ListGroup from '../components/ListGroup'


function AllProducts(props) {

    const [products,setProducts] = useState([]);
    const[categories,setCategory] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [filtereditems,setFilteredItems] = useState('');
    const location = useLocation();

    useEffect(()=>{
        async function fectchData(){
            const request = await axios.get(location.pathname);
            const req = await axios.get('products/categories');
           setProducts(request.data);    
           const cat = ['All Categories',...req.data];
           setCategory(cat);
           const filtered = selectedCategory!=='All Categories'? products.filter(p=>p.category===selectedCategory):request.data;
           setFilteredItems(filtered);
           return request;
        }
        fectchData();

    },[selectedCategory]);

    const handleClick = (category)=>{
        setSelectedCategory(category);
       
    }

    return (
        <div className='container-2'>


            <div className="container-1  "style={{display:"block",width:"30%"}}>

                    {categories && categories.map(category=>(     
                    
                    <div key={category} className='col'> <ListGroup items={categories} itemSelected = {selectedCategory}className="mx-auto" key={category} name={category} onClick={handleClick}/>  </div>                 
                        
                    ))} 

            </div>


            <div className="product_listing">
                <div className="container-1">
                    <div className="row">
                        {filtereditems && filtereditems.map(product=>(     
                    
                        <div key={product.id} className='col'> <Card image={product.image} price={product.price}className="mx-auto" key={product.id} id={product.id} name={product.title} onClick={()=>{handleClick(product.id)}}/>  </div>                 
                            
                        ))}      
                    </div>   
                </div>
            </div>
                        
                           

        </div>
    
    );
}

export default AllProducts;