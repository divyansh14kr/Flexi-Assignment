import React from "react";
import Loading from "./Loading";

function Home(){

    const [fullname,setFullName] = useState("");
    return <div>
        <h1>Resume Builder with AI</h1>
        <p>Create a job winning resume with the help of AI in senconds</p>
        <form action="">
            <label htmlFor="fullname">Enter your full name</label>
            <input name="fullname" type="text" required="true" id="fullname" value={fullname} onChange={(e )=>{setFullName(e.target.value)}}/>
        </form>
    </div>
}