import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className='header'>
            <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="..."  />
            <div className="header_search">
                <input type="text" className="header_searchInput  " />
                <SearchIcon className='header_searchIcon'/>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header_optionLineOne">
                        Sign In
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                       Return
                    </span>
                    <span className="header_optionLineOne">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineOne">
                        Prime
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;