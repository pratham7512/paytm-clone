import { useState } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/Bottomwarning";

export function Signin(){
    const [username, setUsername]=useState('John')
    const [password, setPassword]=useState('John')
    const navigate=useNavigate();

    return <div class="flex justify-center items-center h-screen bg-slate-200">
        <div class='flex flex-col items-center w-72 h-3/6 bg-white rounded-md'>
            <div class='text-center text-black text-4xl font-bold pt-6 pb-3'>Sign In</div>
            <div class="text-center w-72">Enter your information to login</div>
            <InputBox name="Email" placeholder={"johnhoe69@gmail.com"} onChange={(e)=>{
            setUsername(e.target.value)
      }} />
            <InputBox name="Password" placeholder={"123456"} onChange={(e)=>{
            setPassword(e.target.value)
      }}  />
            <Button value="Sign In" onClick={async () => {
                console.log({username,
                    password})
            const response = await axios.post("http://localhost:3001/api/v1/user/signin", {
              username,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }}/>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
        </div>
    </div>
}