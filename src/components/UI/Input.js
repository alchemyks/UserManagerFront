export default function Input(props){
    return (
        <div className={'blockInput'}>
            <label className={"blockInput_label"}>{props.label}
                <input {...props}/>
            </label>
        </div>
    )
}
