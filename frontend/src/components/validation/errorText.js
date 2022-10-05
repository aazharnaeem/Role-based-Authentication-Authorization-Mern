

const ErrorText=(props)=>{
    return(
        <div
        style={{color:'red', fontSize:'12px'}}
        >
            {props.children}
        </div>
    )
}

export default ErrorText