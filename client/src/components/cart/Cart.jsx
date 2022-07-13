import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import "./cart.css";
import useFetch from '../../hooks/useFetch.js';

export const Cart = ({setOpen, shopId}) => {
    const {data,loading,error} = useFetch( `/shops/product/${shopId}`);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const handelSelect=(e)=>{
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedProduct (
            checked ? [...selectedProduct, value] : selectedProduct.filter((item) => item !== value)
        )

    }
    
  return (
    <div className='cart'>
        <div className='cContainer'>
            <FontAwesomeIcon icon={faCircleXmark}
             className="rClose"
             onClick={() => setOpen(false)}
             />
        <span>Select the items:</span>
        
        {data.map(item => (
            <div className="cItem">
                <div className="cItemInfo">
                   <div className="cName">{item.pname}</div>
                   <div className="cDesc">{item.desc}</div>
                   <div className="cPrice">{item.price}</div>
                </div>
                {item.proNumbers.map(
            (proNumber) => (
                <div className="cItemNumber">
                    <label>{proNumber.number}</label>
                    <input type = "checkbox" value={proNumber._id} onChange={handelSelect}/>
                    </div>
            
            
        ))}
           
            </div>
         
        
        ))}

       
        <button  className="cButton">Purchese now! </button>
        </div>
            </div>
  )
}
