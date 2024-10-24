import React from 'react';


const Footer = ({darkMode}) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer class="footer">
        <p className={`text-center px-6 py-2  shadow-md backdrop-blur-md ${darkMode ? 'bg-gray-900/80' : 'bg-white/25'}`}>&copy;  {currentYear} Bhishan prasad Sah - All rights reserved.</p>
    </footer>
    );
};


export default Footer;
