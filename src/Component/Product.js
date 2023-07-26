

const Product =({name, img, des, price}) =>{


    return(
        <div className="products">
            <img src={img} alt={name}/>
            <h1>{name}</h1>
            <p>{des}</p>
            <p>Price : {price}</p>
        </div>
    )
}

export default Product;