import axios from "axios";
import { useEffect, useState } from "react";

function FetchData()
{

    const[data,setData] = useState([]);
    const url = "http://localhost:4578/student/show";
    useEffect( ()=>
         {
            axios.get(url)
            .then(res=>setData(res.data))
            .catch(err => console.log(err));
         }, [])
    
         return(
            <div>
                <h1>React API - fetch Data using axios</h1>
                <table>
                    <th>id</th>
                    <th>name</th>
                    <tbody>
                       
                        {
                            data.map((show,id)=>{
                                return <tr key={id}>
                                    <td> {show.id}</td>

                                    <td>{show.name}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
         )
}
export default FetchData;