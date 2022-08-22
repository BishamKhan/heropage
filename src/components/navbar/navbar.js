import React from "react";
import './navbar.css'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import honeychoco from '../images/Untitled-4.png'
import cartimg from "../images/bar.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fa} from '@fortawesome/free-solid-svg-icons'



export default function Navbar() {
  return (
    <>
{/*  
 <!-- Navbar Start --> */}
  <nav>
    <div class="wrapper">
      <div class="start">
        <p class="startText">SINGLE ORIGIN AND OTHER PRODUCTS</p>
      </div>
      <div><a href="#">
          <p class="moto"> <b> HONEYMOON</b> <br/> CHOCOLATE</p>
        </a></div>
      <input type="radio" name="slider" id="menu-btn"/>
      <input type="radio" name="slider" id="close-btn" />
      <ul class="nav-links">
        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
        <li><a href="#">Home</a></li>
        <li>
          <a href="#" class="desktop-item">Recipes</a>
          <input type="checkbox" id="showDrop"/>
          <label for="showDrop" class="mobile-item">Recipes</label>
          <ul class="drop-menu">
            <li><a href="#">Pakistani recipes</a></li>
            <li><a href="#">Drinks</a></li>
            <li><a href="#">Chinese recipes</a></li>
            <li><a href="#">Desi recipes</a></li>
            <li><a href="#">Desserts</a></li>
          </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
         {/* <li> */}
          {/* <img src="images/animate.bmp" class="cart" alt=""/> */}
          {/* <img src={cartimg} class="carti" alt="" /> */}
          {/* </li> */}
         <li><a href="#" class="cartText">Cart</a></li>
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
  </nav>

    </>
  );
}
