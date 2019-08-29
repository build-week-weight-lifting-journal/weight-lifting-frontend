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
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        padding: 30px;
        `
    const Button = styled.div`
        margin: 0 auto;
        height: 50px;
        width: 150px;
        border-radius:25px;
        background:white;
        box-shadow: 2px 2px silver;


    `

    return(
        <Error className="error-page">
        <h1>Sorry to inform you but...</h1>
        <Image src={logo} alt="Lambda Lifts logo"/>
        <p> is currently working on this at the moment...</p>
        <p>I think you mean to... </p>
            <NavLink  className="error-button"
            exact to={`/SignUpForm`}> 
            <Button ><strong className="button-content" >Sign Up</strong>
                 </Button></NavLink>
        </Error>
    );
}