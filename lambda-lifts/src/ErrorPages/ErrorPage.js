import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/Logo.png';
import styled from 'styled-components';



export default function ErrorPage() {

    const Image = styled.img`
    box-sizing: border-box;
    color: white;
    border-radius:15%;
    padding:30px;
    `
        const Error = styled.div`
        box-sizing: border-box;
        margin-bottom: 30px;
        padding: 30px;
        border-radius: 25px;
         margin-top: 60px;
        `
    

    return(
        <Error className="error-page">
        <h1>Sorry to inform you but...</h1>
        <Image src={logo} alt="Lambda Lifts logo"/>
        <p> is currently working on this at the moment...</p>
        <p>I think you mean to... </p>
            <NavLink  
            exact to={`/SignUpForm`}> 
            <button className="error-button"><strong>Sign Up</strong>
                 </button></NavLink>
        </Error>
    );
}