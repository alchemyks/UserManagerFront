import Input from "./UI/Input";
import Button from "./UI/Button";
import {useEffect, useState} from "react";
import {deleteUser, patchUser, postUser} from "../services/user.rest";

export default function Form({user, format}) {

    let initInputsValue = {
        'username': '',
        'first_name': '',
        'last_name': '',
        'email': '',
        'is_driver': '',
        'password': '',
        'repeat_password': ''
    }
    const [inputsValue, setInputsValue] = useState(initInputsValue)
    const onChangeInputs = (e) => {
        setInputsValue({...inputsValue, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        if (user === undefined) {
            return;
        }
        setInputsValue({
            'username': user.username,
            'first_name': user.profile.first_name,
            'last_name': user.profile.last_name,
            'email': user.profile.email,
            'is_driver': user.is_driver,
            'password': '',
            'repeat_password': ''
        })
    }, [user])

    const onSubmit = (e) => {
        e.preventDefault()
        const requestData = {
            'username': inputsValue.username,
            'password': inputsValue.password,
            'is_driver': inputsValue.is_driver,
            'profile': {
                'first_name': inputsValue.first_name,
                'last_name': inputsValue.last_name,
                'email': inputsValue.email
            }

        }
        postUser('users', requestData, 'POST').then();
        setInputsValue(initInputsValue)

    }
    const onDelete = (e) => {
        e.preventDefault()
        deleteUser('users', user.id).then();
        setInputsValue(initInputsValue)

    }
    const onUpdate = (e) => {
        e.preventDefault()
        const requestData = {
            'username': inputsValue.username,
            /*'password': inputsValue.password,*/
            'is_driver': inputsValue.is_driver,
            'profile': {
                'first_name': inputsValue.first_name,
                'last_name': inputsValue.last_name,
                'email': inputsValue.email
            }

        }
        patchUser('users',user.id, requestData).then();
        setInputsValue(initInputsValue)

    }

    return (
        <div className={'blockForm border_radius'}>
            <div className="blockForm_title">
                <strong>{user? `${inputsValue.first_name} ${inputsValue.last_name}`: "Create new user"}</strong>
            </div>
            <form>
                <Input label={"Username"} type={'text'} placeholder={''} name={'username'} value={inputsValue.username}
                       onChange={onChangeInputs}/>
                <Input label={"First name"} type={'text'} placeholder={''} name={'first_name'}
                       value={inputsValue.first_name} onChange={onChangeInputs}/>
                <Input label={"Last name"} type={'text'} placeholder={''} name={'last_name'}
                       value={inputsValue.last_name} onChange={onChangeInputs}/>
                <Input label={"Email"} type={'text'} placeholder={''} name={'email'} value={inputsValue.email}
                       onChange={onChangeInputs}/>
                {/*<Input label={"Type"} type={'text'} placeholder={''} name={'is_driver'} value={inputsValue.type}
                       onChange={onChangeInputs}/>*/}
                <div className={'blockSelect'}>
                    <label className={'blockInput_label'}>Type</label>
                    <select className={"blockInput_input"} size={'1'}
                            value={inputsValue.is_driver !== '' ? inputsValue.is_driver : 'DEFAULT'}
                            name={'is_driver'} onChange={onChangeInputs}>
                        <option value="DEFAULT" disabled={true}> </option>
                        <option value={'false'}>Administrator</option>
                        <option value={'true'}>Driver</option>
                    </select>
                </div>
                <Input label={"Password"} type={'text'} placeholder={''} name={'password'} value={inputsValue.password}
                       onChange={onChangeInputs}/>
                <Input label={"Repeat password"} type={'text'} placeholder={''} name={'repeat_password'}
                       value={inputsValue.repeat_password} onChange={onChangeInputs}/>
                <div className="blockButton dFlex blockButton_create">
                    {user
                        ? <>
                            <Button type={'button'} className={'blockButton_input'} value={'Delete'} onClick={onDelete}/>
                            <Button type={'button'} className={'blockButton_input'} value={'Update'} onClick={onUpdate}/>
                          </>
                        : <>
                            <Button type={'button'} className={'blockButton_input'} value={'Create'} onClick={onSubmit}/>
                          </>
                    }
                </div>
            </form>

        </div>
    )
}
