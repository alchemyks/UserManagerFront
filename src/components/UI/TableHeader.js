export default function TableHeader({header}){
    return (
        <div className={"table_row table_header dFlex"}>
            {
                header.map((value, index) => {
                    return(
                        <div className={"table_column"} key={index+1}>{value}</div>
                    )
                })
            }
        </div>
    )
}
