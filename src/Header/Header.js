import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="headerContent">
                <div className="left"><h1><a href="#">Cherry</a></h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p></div>
                <div className="right">
                    <form className="search">
                        <input type="text" placeholder="Search..."></input>
                        <input type="image" src="images/search.png" title="Search"></input>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Header;