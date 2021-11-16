import {useEffect, useState} from "react";
import {baseFetch} from "../services/user.rest";
import User from "./User";


export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        baseFetch('users').then(value => {
            setUsers(value)})
    },[])

    return <div className={'users'}>
        {
            users.map(user => {
                return (
                    <User key={user.id} user={user}/>
                )
            })
        }
    </div>
}