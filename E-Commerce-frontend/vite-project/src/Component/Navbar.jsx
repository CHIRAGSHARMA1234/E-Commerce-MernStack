import React from "react";
// import { a } from 'react-router-dom'
// import "../App.css"

const Navbar = () => {
  return (
    <>
      <nav
        className=" navbar bg-secondary-subtle navbar-expand-sm "
        id="navbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand me-5" href="#" style={{height:"50px"}} id="navlogo">
            <img src="https://png.pngtree.com/png-vector/20220207/ourmid/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099.png" style={{height:"45px",borderRadius:"50%"}} alt="" />
          </a>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mybtn"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center fs-5" id="mybtn">
            <ul
              className="navbar-nav ms-5"
              style={{ display: "flex", gap: "30%" }}
            >
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">
                  Products
                </a>
              </li>
            

                <select className="nav-item" style={{background:"transparent", border:"none"}}>
                  
                  <option>Category</option>
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " href="home">
                  Logout
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="">
                  <i className="fa-solid fa-cart-shopping" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <i class="fa-solid fa-user"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
