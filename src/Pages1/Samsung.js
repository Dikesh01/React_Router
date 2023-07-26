import React from "react";
import Product from "../Component/Product";

let productData = [{
    id:1, name:"Samsung Galaxy Note 10", des:"Works smoothy like butter", price:"18000 /- ", 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRy6gBatgWPycZtVJ6ktrqGd0NRPH-J36eTalltIfuXKXpPxuZOQ7FB2A2cdcnVeDmhJk&usqp=CAU"
},
{
    id:2, name:"Samsung Galaxy Note 9", des:"Works smoothy like butter", price:"15500 /- ",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLeWu1azyfRPpJjyCjMd-8-8r69HutPssLUvLH_ggFwDDPcTGR8rom898rnwQi1XjvPdo&usqp=CAU"
},
{
    id:3, name:"Samsung Galaxy Note 11", des:"Works smoothy like butter", price:"27400 /- ", 
    img:"https://cdn1.smartprix.com/rx-ii3Pn8ry8-w1200-h1200/i3Pn8ry8.jpg"
},

]

const Samsung =() =>{

    return(
        <div className="allItems">
            {
                productData.map((item) =>(
                    <Product name={item.name} des={item.des} price ={item.price} img={item.img} />
                ))
            }
        </div>
    )
}

export default Samsung;