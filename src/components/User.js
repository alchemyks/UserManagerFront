

export default function User({user}){
    return <div className={'user'}>
        <div className="user_info">{user.username}</div>
        <div className="user_info">{user.first_name}</div>
        <div className="user_info">{user.last_name}</div>
        <div className="user_info">{user.email}</div>
        <div className="user_info">{user.is_driver ? "Driver":"Administrator"}</div>
    </div>
}