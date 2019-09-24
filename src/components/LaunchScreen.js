import React from "react";


export default function LaunchScreen () {
    return (
        <div>
           <img src="src/images/LifeGPALogo.png" alt="A logo of life GPA"/>
           <p>Welcome to the new you!</p>
           <div className="button-container">
           <button className="create-btn">CREATE ACCOUNT</button>
           <button>LOGIN IN</button>
           </div>
       </div>

    );
};