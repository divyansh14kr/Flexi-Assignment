import React from "react";
import Loading from "./Loading";

function Home(){

    const [fullname,setFullName] = useState("");
    const [currentPostiion, setCurrenPostion] = useState("");
    return <div>
        <h1>Resume Builder with AI</h1>
        <p>Create a job winning resume with the help of AI in senconds</p>
        <form action="">

            <label htmlFor="fullname">Enter your full name</label>
            <input name="fullname" 
            type="text" 
            required="true" 
            id="fullname" 
            value={fullname} onChange={(e )=>{setFullName(e.target.value)}}/>


            <label htmlFor="currentposition">Current Posotion</label>
            <input name="currentPosition" 
                type="text"
                required="true"
                value={currentPostiion} 
                onChange={(e )=>{setCurrenPostion(e.target.value)}}/>

            <label htmlFor="fullname">Enter your full name</label>
            <input name="fullname" type="text" required="true" id="fullname" value={fullname} onChange={(e )=>{setFullName(e.target.value)}}/>

        </form>
    </div>
}