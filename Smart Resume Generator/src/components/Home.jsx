import React from "react";
import Loading from "./Loading";
import { useState } from "react";

function Home(){

    const [fullname,setFullName] = useState("");
    const [currentPostiion, setCurrenPostion] = useState("");
    const [currentLength, setCurrentLength] = useState(1); 
    const [ currentStack , setCurrentStack] = useState({})
    const [image, setImage] = useState(null)
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

            <div className="nestedContainr">

                <div>
                    <label htmlFor="currentPosition">Current Posotion</label>
                    <input name="currentPosition" 
                        type="text"
                        required="true"
                        value={currentPostiion} 
                        onChange={(e )=>{setCurrenPostion(e.target.value)}}/>


                </div>
                <div>
                    <label htmlFor="currentLength">Duration of current position (in years)</label>
                    <input name="currentLength" 
                        type="text"
                        required="true"
                        value={currentLength} 
                        onChange={(e )=>{setCurrentLength(e.target.value)}}/>

                </div>
                <div>
                    <label htmlFor="currentStack">Current Tech Stack</label>
                    <input name="currentStack" 
                        type="text"
                        required="true"
                        value={currentStack} 
                        onChange={(e )=>{setCurrentStack(e.target.value)}}/>
                </div>
            </div>
        
            <div>
                    <label htmlFor="photo">Upload your image</label>
                    <input name="photo" 
                        type="file"
                        id= "photo"
                        required="true"
                        accept="image/x-png,image/jpeg"
                        onChange={(e )=>{setImage(e.target.files[0])}}/>
                </div>
                <button>
                    Create Resume
                </button>


        </form>
    </div>
}
export default Home