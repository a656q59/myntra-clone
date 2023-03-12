import React from 'react';
import '../styles/Header.css';
import { Link} from 'react-router-dom';

function Header(props) {
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid  ">

        <Link className="navbar-brand" to="/"><img src="https://static.toiimg.com/thumb/imgsize-282668,msid-80601325,width-100,resizemode-4/80601325.jpg" alt="" /></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 w-100 ">


            <li className="nav-item d-md-flex flex-md-row justify-content-md-evenly w-50 ">
            <a className="nav-link active" aria-current="page" href="/products/">All </a>
            <a className="nav-link active" aria-current="page" href="/products/category/men's clothing">MEN</a>
            <a className="nav-link active" aria-current="page" href="products/category/women's clothing">WOMEN</a>
            <a className="nav-link active" aria-current="page" href="/products/">HOME & LIVING</a>
            <a className="nav-link active" aria-current="page" href="/products/">BEAUTY</a>
            </li>


            <form className="d-flex" role="search">
                <input className="form-control me-5  " type="search" placeholder="Search" aria-label="Search"/>
            </form> 


            <li className="nav-item check-this d-flex w-25 justify-content-evenly">
                <a className="nav-link active" aria-current="page" href="/products/">Profile</a>
                <a className="nav-link active" aria-current="page" href="/products/">Wishist</a>
                <a className="nav-link active " aria-current="page" href="/products/">Bag</a>
            </li>               


        </ul>
        
        </div>
        </div>
        </nav>

        
    </>
    );
}

export default Header;

