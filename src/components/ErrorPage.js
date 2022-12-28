import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({ error }) => {
    return (
        <div className='errorContainer'>
            <h2 style={{ marginBottom: "30px" }}>{error}</h2>
            <h1>Error message</h1>
            <Link to='/'>- Go Home -</Link>
        </div>
    );
};

export default ErrorPage;