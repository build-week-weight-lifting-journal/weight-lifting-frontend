import React from 'react';
import { Image, Card } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';
import logonumbers from '../images/123.png';
import logoApple from '../images/Apple.png';
import logoGraph from '../images/Graph.png';
import logoShape from '../images/Shape.png';
import logoWorkout from '../images/Workout.png';
import logoTutorial from '../images/Tutorial.png';
import logoMain from '../images/Logo.png';
import NavBar from '../components/NavBar';




export default function Dashboard (){

    return(
        <div className="dashboard-container">
            <div className="top-section">
                <div className="image-div">
                <div id="circle1"></div>
                <Image className="dashboard-logo" src={logoMain} alt="Lambda Lift logo" wraped/>
                <div id="circle2"></div>
                </div>
            </div>
            <div className="bottom-section">
                <Card.Group className="the-card-buttons-container">
                    <Card className="card">
                    <NavLink className="the-navlink" exact to="/WorkoutList">
                            <Image src={logoWorkout} />
                            <Card.Header> My Workouts  </Card.Header>
                    </NavLink>
                    </Card>

                    <Card className="card">
                    <NavLink className="the-navlink" exact to="/ErrorPage2">
                            <Image src={logonumbers} />
                            <Card.Header> Calorie Count  </Card.Header>
                    </NavLink>
                    </Card>
                    <Card className="card">
                    <NavLink className="the-navlink" exact to="/ErrorPage2">
                            <Image src={logoShape} />
                            <Card.Header> Progress Pictures  </Card.Header>
                    </NavLink>
                    </Card>
                    <Card className="card">
                    <NavLink className="the-navlink" exact to="/ErrorPage2">
                            <Image src={logoGraph} />
                            <Card.Header> Weight Graph  </Card.Header>
                    </NavLink>
                    </Card>
                    <Card className="card">
                    <NavLink className="the-navlink" exact to="/ErrorPage2">
                            <Image src={logoApple} />
                            <Card.Header> Healthy Meals  </Card.Header>
                    </NavLink>
                    </Card>
                    <Card className="card">
                    <NavLink className="the-navlink" exact to="/ErrorPage2">
                            <Image src={logoTutorial} />
                            <Card.Header> Workout Tutorials  </Card.Header>
                    </NavLink>
                    </Card>
                </Card.Group>

            </div>
        </div>
    );
}