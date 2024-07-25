import { useEffect, useState } from "react";
function Ffetch(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchMyData=async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(res.ok);
            const resData=await res.json();
            setData(resData);
            console.log(resData)
            
        }
        fetchMyData();
    })
    return(
        <div>
        <h5>fetching the data</h5>
        <table class="table">
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">userId</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
    </thead>
    <tbody>
    {data.map((dataItem,index)=>
            <tr key={index}>
           
            <td>{dataItem.id}</td>
            <td>{dataItem.userId}</td>
            <td>{dataItem.title}</td>
            <td>{dataItem.body}</td>
            </tr>
            )}
    </tbody>
    </table>
        
        </div>
    );

}
export default Ffetch;