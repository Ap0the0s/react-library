import React from 'react';
import Logo from "./Logo.jsx";
import Filters from "../containers/filters.js";

const Header = () => (
    <div className="header">
        <Logo/>
        <Filters/>
    </div>
);
export default Header;
