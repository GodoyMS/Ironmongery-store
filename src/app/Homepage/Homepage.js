import navLogo from './logo.png'
import { BrowserRouter as Router, Link, Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import mainImage from "./mainImage.jpg"

function Homepage() {

    return(
        <div>
             




            {/*Desktop menu */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
            
            {/*Portada */}

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={mainImage} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                <img src={mainImage} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={mainImage} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>




           

            

             <div className='searchBar'>
                <div>
                <nav  style={{backgroundColor:""}}>
                    <div className="" >
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar un artículo" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit"><i className="material-icons">search</i></button>
                            
                        </form>

                    </div>
                </nav>
                </div>
                
             </div>



            <nav className="navBar sticky top-0 ">
                <div>
                    <Link to="/" ><img  src={navLogo}  className="logo"/></Link>
                </div>
                {/*<div className='searchBar'>
                    <input placeholder="Escribir algo" type={"search"}/>
                    <button >Buscar</button>        
                </div>*/}
                <div>
                    <Link to="product"> Product</Link>             
                </div>
            
            </nav>
            <Outlet></Outlet>

            
            
                
                
                 
        </div>                
        
        

     
    
        )
}
export default Homepage;