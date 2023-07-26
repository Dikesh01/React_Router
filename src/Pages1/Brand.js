import React from "react";
import { Outlet,useNavigate } from "react-router-dom";

const Brand =() =>{

    let navigate = useNavigate();

    return (
        <div >
            <h1>Brand</h1>
            <p>Our Brands latest upcoming products shown</p>

            <button onClick={()=>navigate("/brand")}>MacBook</button>
            <button onClick={()=>navigate("/brand/nokia")}>Nokia</button>
            <button onClick={()=>navigate("/brand/samsung")}>Samsung</button>
            <br />
            <Outlet />
            
        </div>
    )
}

export default Brand;