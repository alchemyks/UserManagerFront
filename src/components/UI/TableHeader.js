export default function TableHeader({header}){
    return (
        <div className={"table_row table_header"}>
            {
                header.map(value => {
                    return(
                        <div className={"table_column"}>{value}</div>
                    )
                })
            }
        </div>
    )
}
