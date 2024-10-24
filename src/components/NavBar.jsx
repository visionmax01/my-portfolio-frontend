import React, { useEffect , useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import  MainLogo from '../assets/img/my-portfolioLogo.png'

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (path) => {
        setIsOpen(false);
        navigate(path);
    };

    const isActive = (path) => (location.pathname === path ? 'bg-blue-500 font-bold' : '');

    return (
        <nav className={`fixed z-50 top-0 left-0 right-0 px-6 py-2 flex justify-between items-center shadow-md backdrop-blur-md ${darkMode ? 'bg-gray-600/70' : 'bg-white/70'}`}>
            <div className={`text-lg font-bold cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`} onClick={() => handleNavigation('/')}>
                <img src={MainLogo} 
                className={`py-1 px-3 rounded transition-colors h-10 ${darkMode ? '' : ''}`}
                 alt=""
                 srcset="" />
            </div>
            <div className="hidden md:flex space-x-8">
                <button className={`py-1 px-3 rounded-md ${isActive('/')}`} onClick={() => handleNavigation('/')}>Home</button>
                <button className={`py-1 px-3 rounded-md ${isActive('/about')}`} onClick={() => handleNavigation('/about')}>About</button>
                <button className={`py-1 px-3 rounded-md ${isActive('/projects')}`} onClick={() => handleNavigation('/projects')}>Projects</button>
                <button className={`py-1 px-3 rounded-md ${isActive('/contact')}`} onClick={() => handleNavigation('/contact')}>Contact</button>
                <button className={`py-1 px-3 rounded-md ${isActive('/news')}`} onClick={() => handleNavigation('/news')}>News</button>
            </div>
            <div className="relative flex gap-4 items-center">
                <button 
                    onClick={() => setDarkMode(!darkMode)} 
                    onMouseEnter={() => setShowTooltip(true)} 
                    onMouseLeave={() => setShowTooltip(false)} 
                    className={`px-2 py-0.5  rounded transition-colors ${darkMode ? 'bg-white text-yellow-500' : 'bg-black text-white'} hover:${darkMode ? 'bg-gray-200' : 'bg-gray-800'}`}
                >
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </button>
                {showTooltip && (
                    <div className={`absolute top-10 right-0 p-1 w-[80px] text-xs text-white bg-black rounded`}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </div>
                )}
                <div className="md:hidden text-2xl">
                    <button onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: -20 }}
                    className={`text-lg font-bold absolute top-14 left-0 flex flex-col gap-2  w-full  p-2  shadow-lg md:hidden ${darkMode ? '  bg-gray-700/95' : 'text-black  bg-color-white/95'}`}
                >
                    <button className={`block py-2 px-2 rounded w-full  ${isActive('/')}`} onClick={() => handleNavigation('/')}>Home</button>
                    <button className={`block py-2  px-2 rounded w-full ${isActive('/about')}`} onClick={() => handleNavigation('/about')}>About</button>
                    <button className={`block py-2  px-2 rounded w-full ${isActive('/projects')}`} onClick={() => handleNavigation('/projects')}>Projects</button>
                    <button className={`block py-2  px-2 rounded w-full ${isActive('/contact')}`} onClick={() => handleNavigation('/contact')}>Contact</button>
                    <button className={`block py-2  px-2 rounded w-full ${isActive('/news')}`} onClick={() => handleNavigation('/news')}>News</button>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
