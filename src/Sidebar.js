import React from 'react';
import logo from './assets/header-logo.png';
import userIcon from './assets/account-icon.svg';
import settingsIcon from './assets/settings-icon.svg';
import IntentsIcons from './assets/intent-icon.svg';
import entityIcon from './assets/entity-icon.svg';
import trainingIcon from './assets/training-icon.svg';
import chatIcon from './assets/chat-icon.svg';
 
import { removeUserSession,getUsername } from './Utils/Common';

function Sidebar(props) {
  const username = getUsername();
    // handle click event of logout button
    const handleLogout = () => {
      removeUserSession();
    }

  return (
    <div className=" max-h-screen w-5/12 sidebar-color overflow-x-auto flex flex-col">
      <div className="py-2 px-2"><img src={logo} alt="Logo" className="logo" /></div>
     
      <div className="flex-1 justify-between px-2 py-2 bg-blue text-white text-sm flex">
    <div className="flex flex-row">
    <img src={chatIcon} alt="Logo" className="account-icon mr-1" /> 
    TBS
    </div>
   >
    
    </div>

    <div className="flex-1 justify-between  px-2 py-2  text-white text-sm flex">
    <div className="flex flex-row">
    <img src={IntentsIcons} alt="Logo" className="account-icon mr-1" /> 
    Intents
    </div>
    >
    </div>



    <div className="flex-1 justify-between  px-2 py-2  text-white text-sm flex">
    <div className="flex flex-row">
    <img src={entityIcon} alt="Logo" className="account-icon mr-1" /> 
    Entities
    </div>
   >
    </div>

    
    <div className="flex-1 justify-between  px-2 py-2   text-white text-sm flex">
    <div className="flex flex-row">
    <img src={trainingIcon} alt="Logo" className="account-icon mr-1" /> 
    Training
    </div>
   >
    </div>



      <div className="h-screen flex items-end sidebar-color">
     <div className="flex-1 px-2 py-2 bg-blue text-white text-sm flex">
    <img src={userIcon} alt="Logo" className="account-icon mr-1" /> 
    {username}
    <img src={settingsIcon} alt="Logo" className="account-icon ml-1" /> 
    </div>
</div>
    </div>
  );
}

export default Sidebar;
