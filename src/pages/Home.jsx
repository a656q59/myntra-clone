import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import Card from '../components/Card';
import Banner from '../components/Banner';
import axios from '../utilities/axios';


function Home(props) {
    const ima = "https://i.redd.it/sztxwrqwmqu11.png";
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get('/products/categories');
            setCategories(request.data);
            return request;
        }
        fetchData();
    },[])

    const handleClick= (category)=>{
       console.log(category);
    }

    return (
        <div className="home ">
            <Banner/>   
            <div className="container">
                <div className="row">
                    {categories.map(category=>(     
                
                    <div className='col'> <Card image={ima} className="mx-auto" key={category} name={category} onClick={handleClick}/>  </div>                 
                        
                    ))}      
                </div>   
            </div>
        </div>
    );
}

export default Home;