import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import HomeLogo from '../images/Home.png';
import ProfileLogo from '../images/Profile.png';
import SettingsLogo from '../images/Settings.png'
import logoutLogo from '../images/logout.png';

export default function NavBar() {

    const logout = () => {
        
        localStorage.removeItem("userId");
        localStorage.removeItem("journalId");
        localStorage.removeItem("exerciseId");
        localStorage.removeItem("jouExeId");
        localStorage.removeItem("token");
    }

    return(
        <div className="navbar">
            <div>
                <div className="logocircle">
                    {/* link for home */}
                    <NavLink className='navlink' to='/Dashboard'> <Image className="image" src={HomeLogo} alt="home"/> </NavLink>
                </div>
                <h4>Home</h4>
            </div>
            {/* closes home */}

            <div>
                <div className="logocircle">
                    {/* link for profile */}
                    <NavLink to='/ErrorPage2'> <Image className="image" src={ProfileLogo} alt="profile" />  </NavLink>
                </div>
                <h4>Profile</h4>
            </div>
            {/* closes Profile */}

            <div>
                <div className="logocircle">
                    {/* link for settings */}
                    <NavLink to="/ErrorPage2"> <Image className="image" src={SettingsLogo} alt='settings' /> </NavLink>
                </div>
                <h4>Settings</h4>
            </div>
            {/* closes settings */}

            <div>
                <div className="logocircle4">
                    {/* link for more */}
                    <NavLink to="/" onClick={()=>logout()}> <Image className="image logout" src={logoutLogo} alt="logout"/> </NavLink>
                </div>
                <h4>Logout</h4>
            </div>
            {/* closes more */}
        </div>

    )
};