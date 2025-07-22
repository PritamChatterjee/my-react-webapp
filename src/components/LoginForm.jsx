import { useState } from "react";
import Layout from "./Layout";

function Login()
{
    const [data,setData] = useState({username:'', password:''});

    const[form,setForm] = useState({username:'', password:''});

    const[submit, isSubmitted] = useState(false);

    const printValues = e =>{
        e.preventDefault();
        setForm({username:data.username, password:data.password});
        isSubmitted(true);
    };

    const updateField = e =>{
        setData(
            {
                ...data, 
                [e.target.name] : e.target.value
            }
        );
    };

    return(
        <div>
            <Layout></Layout>
            <form onSubmit={printValues}>
                <label htmlFor="username">UserName</label>
                <input type="text" name="username" value={data.username}
                    onChange={updateField}></input>
                    <br /> <br />
                
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={data.password}
                    onChange={updateField}></input>

                    <br /> <br />
                    <button type="submit" className="btn btn-success">Login</button>
                    <br /> <br />
                    username:
                    {
                        submit?form.username:null
                    }
                    <br />

                    password:{submit?form.password:null}
            </form>
        </div>
    );

}
export default Login;