import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory,useParams } from "react-router-dom";

const  EditProduct =() => {
    const [title,setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
    const {id} = useParams();

    const updateProduct = async (e)=>{
        e.preventDefault();
        await axios.patch(`http://localhost:5000/products/${id}`,{
            title:title,
            price:price
        });
        history.push("/");
    }
    useEffect(()=>{
        getProductById();
    }, []);

    const getProductById = async () => {
          const response = await axios.get(`http://localhost:5000/products/${id}`);
          setTitle(response.data.title);
          setPrice(response.data.price);
    }

    return(
        <div>
            <form onSubmit={updateProduct}>
                <div className="field">
                    <label >title</label>
                    <input className="input" 
                    value ={title} 
                    onChange={(e)=>setTitle(e.target.value)} 
                    type="text" 
                    placeholder="title"></input>
                </div>
                <div className="field">
                    <label >price</label>
                    <input className="input" 
                    type="text" 
                    placeholder="price" 
                    value ={price} 
                    onChange={(e)=>setPrice(e.target.value)}></input>
                </div>
                <div className="field">
                   <button>Update</button>
                </div>
            </form>
            {title} - {price}
        </div>
    )
}
export default EditProduct