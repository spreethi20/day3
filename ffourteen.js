import { useState } from "react";
import F13 from "./fthirteen";
import Freg from "./freg";
function F14(){
    const [isLogin,setIsLogin]=useState(true);
    const showLogin=()=>{setIsLogin(true)}
    const showRegister=()=>{setIsLogin(false)}
    return(
        <div>
            <button onClick={showLogin}>Login</button>
            <button onClick={showRegister}>register</button>
        {isLogin?
            <F13/>
        :
            <Freg/>
        }
        </div>
    );
}
export default F14 ;