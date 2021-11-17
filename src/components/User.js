

export default function User({user}){
    return <div className={'table_row dFlex border_radius'}>
        <div className="table_column">{user.username}</div>
        <div className="table_column">{user.profile.first_name}</div>
        <div className="table_column">{user.profile.last_name}</div>
        <div className="table_column">{user.profile.email}</div>
        <div className="table_column">{user.is_driver ? "Driver":"Administrator"}</div>
    </div>
}
