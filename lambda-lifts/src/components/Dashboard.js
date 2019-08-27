import React from 'react';
import { Image, Card } from 'semantic-ui-react'
import logonumbers from '../images/123.png';
import logoApple from '../images/Apple.png';
import logoGraph from '../images/Graph.png';
import logoShape from '../images/Shape.png';
import logoWorkout from '../images/Workout.png';
import logoTutorial from '../images/Tutorial.png';
import logoMain from '../images/Logo.png';
import NavBar from '../components/NavBar';


import NavBar from './NavBar';

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
            <div className="botton-section">
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Image src={logoWorkout} alt="button to my workouts" />

                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image src={logonumbers} />
                            <Card.Header>   </Card.Header>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image src={logoShape} />
                        </Card.Content>
                        <Card.Header>   </Card.Header>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image src={logoGraph} />
                        </Card.Content>
                        <Card.Header>   </Card.Header>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image src={logoApple} />
                        </Card.Content>
                        <Card.Header>   </Card.Header>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image src={logoTutorial} />
                            <Card.Header>  </Card.Header>
                        </Card.Content>
                    </Card>

                </Card.Group>

            </div>
            <NavBar/>
        </div>
    );
}