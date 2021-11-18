import {useEffect, useState} from "react";
import {getUsers} from "../services/user.rest";
import "../styles/AppStyles.css";
import User from "./User";
import TableHeader from "./UI/TableHeader";


export default function Users({selectUser}){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers('users').then(value => {

            setUsers(value)})
    },[])
    const header = ["USERNAME", "FIRST NAME", "LAST NAME", "EMAIL", "TYPE"]
    return (<div className={'table border_radius'}>
            <TableHeader header={header}/>
        {
            users.map(user => {
                return (
                    <User key={user.id} user={user} selectUser={selectUser}/>
                )
            })
        }
    </div>)
}
