import React from 'react';

const Header = ({ handleToggledarkMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button onClick={()=> handleToggledarkMode((previousDarkmode)=> !previousDarkmode)}className="save">Toogle Mode</button>
        </div>
    )
}

export default Header;