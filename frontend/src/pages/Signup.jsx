import { useState } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signup(){
    const [firstName, setFirstName]=useState('John')
    const [lastName, setLastName]=useState('John')
    const [username, setUsername]=useState('John')
    const [password, setPassword]=useState('John')
    const navigate=useNavigate();

    return <div class="flex justify-center items-center h-screen bg-white">
        <div class='flex flex-col items-center w-72 h-4/6 bg-white rounded-md shadow-xl'>
            <div class='text-center text-black text-4xl font-bold pt-6 pb-3'>Sign Up</div>
            <div class="text-center w-72">Enter your information to create an account</div>
            <InputBox name="First Name" placeholder={"John"} onChange={(e)=>{
            setFirstName(e.target.value)
      }} />
            <InputBox name="Last Name" placeholder={"Hoe"} onChange={(e)=>{
            setLastName(e.target.value)
      }}  />
            <InputBox name="Email" placeholder={"johnhoe69@gmail.com"} onChange={(e)=>{
            setUsername(e.target.value)
      }} />
            <InputBox name="Password" placeholder={"123456"} onChange={(e)=>{
            setPassword(e.target.value)
      }}  />
            <Button value="Sign Up" onClick={async () => {
                console.log({username,
                    firstName,
                    lastName,
                    password})
            const response = await axios.post("http://localhost:3001/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }}/>
        </div>

    </div>
}