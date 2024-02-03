import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"

export const Dashboard=()=>{

    return <div class="">
        <Appbar/>
        <Balance/>
        <Users/>
        </div>
}