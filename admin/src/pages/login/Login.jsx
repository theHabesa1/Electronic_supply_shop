import axios from "axios";
import { useContext } from "react";
import "./login.scss";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
   const [credentials, setCredentials] = useState({
    username: undefined,
    password:undefined  ,
   }
    );

    const {loading,error,dispatch} = useContext(AuthContext);
    const navigate = useNavigate();



    const handleChange = (e) => {
        setCredentials((prev) => ({...prev,[e.target.id]:e.target.value}))
    };
    const handleClick = async e => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
      
           try{
              const res = await axios.post("/auth/login",credentials);
              if(res.data.isAdmin) {
              dispatch({type:"LOGIN_SUCCESS",payload:res.data.details}) 
              alert("You are not an in!");
              
                navigate("/ ")
              }else{
                dispatch({type:"LOGIN_ERROR",payload:{message:"You are not an allowed!"}})
                
              }

        }catch(err){
            dispatch({type:"LOGIN_ERROR",payload:err.response.data})
            alert("You are not an allowed!");
        }
    };
    
    return (
      <div className="login">
            <div className = "lContainer">
                <input type="text" placeholder = "username" id="username" onChange={handleChange} className="lInput" />
                <input type="password" placeholder = "password" id="password" onChange={handleChange} className="lInput" />
                <button diabled = {loading} className="lButton" onClick={handleClick}>Login</button>

                {error && <span>{error.message}</span>}
                </div>
        </div>
    ) 
  }


export default Login