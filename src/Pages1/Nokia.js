import React from "react";
import Product from "../Component/Product";

let productData = [{
    id:1, name:"Nokia 8", des:"Works smoothy like butter", price:"9800 /- ", 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKwUKiBWTcyDRri-BhkOuywTnTRPVLn3Pqw&usqp=CAU"
},
{
    id:2, name:"Nokia 10", des:"Works smoothy like butter", price:"11000 /- ",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0S7BaNhldgXqkVH0sAyTo1WvFGqn61q-blvcoURqYaG7RKpGKBdmlB-PsJmFCWJV5XI&usqp=CAU"
},
{
    id:3, name:"Nokia 9", des:"Works smoothy like butter", price:"10500 /- ", 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhq_xlYTo8Zxl5ped7wMb-09BqD6SUwtsP3-26JmeyNKMZ5ISwjVdDEm0nnOubwfQq50&usqp=CAU"
},

]

const Nokia =() =>{

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

export default Nokia;