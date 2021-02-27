import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return ( <div className = "home" >
        <div className = "home__container" >
        <img className = "home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Movie/ONIM_2021_GWBleedingHero_3000x1200_POST_Final_en-US_PVD6358_OneNightInMiami._CB413041587_.jpg" alt = "" />
        <div className = "home__row">
        <Product id = "12321341"
        title = "Sweeter Than Honey: Ethiopian Women and Revolution : Testimones of Tigrayan Women"
        price = { 9.09 }
        rating = { 5 }
        image = "https://m.media-amazon.com/images/I/51BXN62VV0L._AC_UL640_FMwebp_QL65_.jpg" />
        <Product id = "49538094"
        title = "ignited Air Fryer Toaster Oven 26.4 Quart Family Size Large Capacity Oven For Bake Broil Pizza Roast Toast Dehydrate with Accessories and Recipe Book (Silver)"
        price = { 174.09 }
        rating = { 4 }
        image = "https://m.media-amazon.com/images/I/718HG-2qM1L._AC_SX360_SY240_QL70_.jpg" />
        </div>{" "}
         <div className = "home__row" >
        <Product id = "4903850"
        title = "New Apple Watch Series 6 (GPS, 40mm) - (PRODUCT)RED - Aluminum Case with (PRODUCT)RED﻿ - Sport Band"
        price = { 339.0 }
        rating = { 3 }
        image = "https://m.media-amazon.com/images/I/81ww7fpkNHL._AC_UL640_FMwebp_QL65_.jpg" /> { " " } 
        <Product id = "23445930"
        title = "All-new Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Glacier White"
        price = { 39.99 }
        rating = { 5 }
        image = "https://m.media-amazon.com/images/I/612KpcXcFBL._AC_UY436_FMwebp_QL65_.jpg" />
        <Product id = "3254354345"
        title = "New Apple iMac (21.5-inch, 8GB RAM, 256GB SSD Storage)"
        price = { 1048.0 }
        rating = { 4 }
        image = "https://m.media-amazon.com/images/I/81blwMhVV8L._AC_UY436_FMwebp_QL65_.jpg" />
        </div>{" "} 
        <div className = "home__row" >
        <Product id = "987654"
        title = "Sennheiser RS120 II On-Ear Wireless RF Headphones with Charging Cradle"
        price = { 104.83 }
        rating = { 3 }
        image = "https://m.media-amazon.com/images/I/81NzuWuye9L._AC_UY436_FMwebp_QL65_.jpg" /> { " " } 
        <Product id = "23447939"
        title = "Best Choice Products 6ft Pre-Lit Pre-Decorated Spruce Hinged Artificial Christmas Tree w/ 798 Tips, 29 Pinecones, 29 Berries,"
        price = { 89.99 }
        rating = { 5 }
        image = "https://m.media-amazon.com/images/I/81P9bPXq6gL._AC_UL640_FMwebp_QL65_.jpg" />
        <Product id = "3254354247"
        title = "X Rocker, 5127401, SE 2.1 Black Leather Video Gaming Chair for Adult, Teen, and Kid Gamers with Pedestal Base, Armrest, and Headrest, 32 x 25 x 42, Black"
        price = { 229.0 }
        rating = { 4 }
        image = "https://images-na.ssl-images-amazon.com/images/I/71laW8YfmBL._AC_SL1500_.jpg" />
        </div>{" "}
         <div className = "home__row" >
        <Product id = "90825332"
        title = "Samsung C34H890WJN - 34 Inch (3440 x 1440) WQHD UltraWide Professional LED Curved Monitor"
        price = { 999.0 }
        rating = { 4 }
        image = "https://m.media-amazon.com/images/I/41gVicwYMiL._AC_UY436_FMwebp_QL65_.jpg" />
        </div>{" "} 
        </div>{" "} 
        </div>
    );
}

export default Home;