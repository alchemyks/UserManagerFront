export default function Input(props){
    return (
        <div className={'blockInput'}>
            <label className={"blockInput_label"}>{props.label}
                <input className={'blockInput_input border_radius'} {...props}/>
            </label>
        </div>
    )
}