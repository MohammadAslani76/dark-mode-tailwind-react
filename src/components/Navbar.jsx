import {BsFillSunFill,BsFillMoonStarsFill} from 'react-icons/bs';

const Navbar =({dark,setDark}) => {
    const navItems = ["Home","About us","Contact us","Products"]
    return (
        <>
            <header className="p-4 dark:bg-gray-800 bg-blue-400 text-gray-800 dark:text-white flex justify-around items-center flex-wrap transition-all">
                <ul className="container flex justify-center items-center gap-4">
                    {
                        navItems.map((item,index) => (
                            <li className="cursor-pointer" key={index}>{item}</li>
                        ))
                    }
                </ul>
                <button onClick={() => setDark(!dark)}>{dark ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}</button>
            </header>
        </>
    );
}

export default Navbar;