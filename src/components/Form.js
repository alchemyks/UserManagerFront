import Input from "./UI/Input";

export default function Form(){
    return (
        <div className={'boxForm border_radius'}>
            <div className="boxForm_title">
                <strong>Create new user</strong>
            </div>
            <form>
                <Input label={"Username"} type={'text'} placeholder={'Test'}/>
                <Input label={"First name"} type={'text'} placeholder={'Test'}/>
                <Input label={"Last name"} type={'text'} placeholder={'Test'}/>
                <Input label={"Email"} type={'text'} placeholder={'Test'}/>
                <Input label={"Type"} type={'text'} placeholder={'Test'}/>
                <Input label={"Password"} type={'text'} placeholder={'Test'}/>
                <Input label={"Repeat password"} type={'text'} placeholder={'Test'}/>
            </form>
        </div>
    )
}