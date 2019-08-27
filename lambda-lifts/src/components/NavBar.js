import React from 'react';
import {NavLink} from 'react-router-dom';
import {Image} from 'semantic-ui-react';
import HomeLogo from '../images/Home.png';
import ProfileLogo from '../images/Profile.png';
import SettingsLogo from '../images/Settings.png'
import MoreLogo from '../images/More.png';

export default function NavBar() {
    return(
        <div className="navbar">

            <div className="logocircle">
                {/* link for home */}
                <NavLink to='/ErrorPage2'> <Image className="image" src={HomeLogo} alt="home"/> </NavLink>
            </div>

            <div className="logocircle">
                {/* link for profile */}
                <NavLink to='/ErrorPage2'> <Image className="image" src={ProfileLogo} alt="profile" />  </NavLink>
            </div>
            
            <div className="logocircle">
                {/* link for settings */}
                <NavLink to="/ErrorPage2"> <Image className="image" src={SettingsLogo} alt='settings' /> </NavLink>
            </div>

            <div className="logocircle">
                {/* link for more */}
                <NavLink to='ErrorPage2'> <Image className="image" src={MoreLogo} alt="more"/> </NavLink>
            </div>
            
        </div>
    )
};