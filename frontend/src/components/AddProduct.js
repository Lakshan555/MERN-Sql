import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const  AddProduct =() => {
    const [title,setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
    const saveProduct = async (e)=>{
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            title:title,
            price:price
        });
        history.push("/");
    }

    return(
        <div>
            <form onSubmit={saveProduct}>
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
                   <button>save</button>
                </div>
            </form>
            {title} - {price}
        </div>
    )
}
export default AddProduct