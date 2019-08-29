import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/Logo.png';
import styled from 'styled-components';



export default function ErrorPage() {

    const Image = styled.img`
    box-sizing: border-box;
    color: white;
    border-radius:15px;
    padding:30px;

    `
    const Error = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    margin-bottom: 30px;
    padding: 30px;
    `
    

    return(
        <Error className="error-page">
        <h1>Sorry to inform you but...</h1>
        <Image src={logo} alt="Lambda Lifts logo"/>
        <p> is currently working on this at the moment...</p>
       
        <NavLink exact to={`/Dashboard`}> <button className="error-button"><strong>Back to Dashboard</strong></button></NavLink>      
        
        
        </Error>

    );
}