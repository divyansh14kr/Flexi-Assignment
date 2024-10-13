import React from "react";
import { Link } from "react-router-dom";

function ErrorPage(){
        return <div>
            <h3>
                There was some error. Please go back to {""}
                <Link to="/">homepage</Link>
            </h3>
        </div>
}
export default ErrorPage;