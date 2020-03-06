import React from "react";
import StyledNightmode from './styles/StyledNightmode';


// props destructuring: (instead of putting in props)
const NightMode = ({ nightModeCallback, nightMode }) => (
    <StyledNightmode>
        <span>Nightmode: </span>
        <label className="switch">
            <input type="checkbox" checked={nightMode} onChange={nightModeCallback} />
            <span className="slider round"></span>
        </label>
    </StyledNightmode>
)

export default NightMode; 