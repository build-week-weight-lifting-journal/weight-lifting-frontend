import React from 'react';
import { Image } from 'semantic-ui-react'
import logo from '../images/123.png';
import logonumbers from '../images/Apple.png';
import logoGraph from '../images/Graph.png';
import logoShape from '../images/Shape.png';
import logoWorkout from '../images/Workout.png';
import logoTutorial from '../images/Tutorial.png';
import logoMain from '../images/Logo.png';
import NavBar from '../components/NavBar';

// import NavBar from './NavBar';

export default function Dashboard (){


    return(
        <div>
            <h1>HELLO WORLD</h1>
            <Image src={logoMain} alt="little fella" />
            {/* <Cards/> */}
            
            <NavBar />
        </div>
    );
}