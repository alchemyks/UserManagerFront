
import './styles/AppStyles.css';

import Users from "./components/Users";
import Form from "./components/Form";
import {useState} from "react";

function App() {

    const [user, setUser] = useState(undefined)

    const selectUser = (user, e)=>{
        setUser(user)
    }
  return (
    <div className="App dFlex">
        <Users selectUser={selectUser}/>
        <Form user={user}/>
    </div>
  );
}

export default App;
