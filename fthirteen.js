import { useRef ,useEffect,useState} from "react";

function F13(){
    let firstref=useRef(null);
    let secondref=useRef(null);
    const [equal,setequal]=useState("");
    const formSubmit=(event)=>{
        event.preventDefault();
        console.log('Submitted');
        console.log(firstref.current.value);
        firstref.current.value='';
        secondref.current.value='';
    }
    useEffect(()=>{
        firstref.current.focus();
    });
    const equity=(event)=>{
        if(firstref.current.value===secondref.current.value){
            setequal("Successful");
            //alert("Successful");
        }
        else{
            setequal("Incorrect password");
            //alert("Incorrect password");
        }
    }
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="card" style={{width:"20rem"}}>
            <h4 style={{margin:"10px"}}>Login</h4>
            <p style={{margin:"10px"}}>Provide your Details</p>
            <div className="card-body">
                <h6 className="card-title">College Id</h6>
                <form onSubmit={formSubmit}>
                <input type="text" ref={firstref} placeholder="College Id"/>
                <h6 className="card-title">Password</h6>
                <input type="password" ref={secondref} placeholder="Password"/>
                <br></br>
                <button className="btn btn-dark" type="submit" onClick={equity}style={{margin:'10px'}}>Submit</button>
                <p>{equal}</p>
                </form>

            </div>
        </div>
        </div>
    );
}
export default F13;