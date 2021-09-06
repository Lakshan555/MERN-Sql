import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const ProductList = () => {

    const [products,setProduct] = useState([]);
    useEffect(() =>{
        getProducts();
    },[])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products')
        setProduct(response.data);
    }

    const deleteProduct = async (id) => {
           await axios.delete(`http://localhost:5000/products/${id}`);
           getProducts();
    }

    return (
        <div>
            <Link to = "/add">ADD</Link>
            <table className="table is-stripped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((products,index)=>(
                        <tr key={products.id}>
                        <td>{1+index}</td>
                        <td>{products.title}</td>
                        <td>{products.price}</td>
                        <td>
                        <Link to={`/edit/${products.id}`}>edit</Link>
                        <button onClick={()=>deleteProduct(products.id)}>delete</button>
                        </td>
                        
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}
export default ProductList