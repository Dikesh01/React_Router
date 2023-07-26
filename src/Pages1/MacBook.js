import React from "react";
import Product from "../Component/Product";

let productData = [{
    id:1, name:"MacBook pro max", des:"Works smoothy like butter", price:"180000 /- ", 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSanaVmyFyS7nSNrmrl04vSDE9ESYDyZt22cA&usqp=CAU"
},
{
    id:2, name:"MacBook 2 pro", des:"Works smoothy like butter", price:"160000 /- ",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qdBhPq0QzesIvOVCHE28NxU6lLRn8dk079WbxBYaEstnI1f1DcGOF6XTzWQBdo6A0nw&usqp=CAU"
},
{
    id:3, name:"MacBook JT pro", des:"Works smoothy like butter", price:"1750000 /- ", 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhtzLZm9GVnaORxoZhwRwg-I_b50tKjwAPF9MNq9oFUzCulKbQkGkFDVUpUE5VwfF0ns&usqp=CAU"
},

]

const MacBook =() =>{

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

export default MacBook;