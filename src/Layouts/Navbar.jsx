import { useState } from "react";

export default function Navbar(props) {

    const handleLandingClick = () => {
        props.handlePageChange('home');
    };

    const handleProjectsClick = () => {
        props.handlePageChange('projects');
    };

    const handleAboutClick = () => {
        props.handlePageChange('about');
    };


    let Links = [
        { name: "HOME", link: "#", handle: handleLandingClick },
        { name: "PROJECTS", link: "#projects", handle: handleProjectsClick },
        { name: "ABOUT", link: "#about", handle: handleAboutClick },
    ];
    let [open, setOpen] = useState(false);

    return (
        <>
            {/* navbar section */}
            <div className="absolute z-10 top-0 left-0 bg-opacity-50 h-16 w-full lg:rounded-b-lg md:rounded-b-lg grid grid-flow-col justify-around bg-[#561D25]">

                <div className="flex flex-row items-center gap-3">
                    <img src="https://picsum.photos/200" alt="logo" className="w-10 h-10 rounded-full cursor-pointer" />
                    <div className="text-white">
                        <h2 className="text-xl font-semibold ">ianzeta.dev</h2>
                    </div>
                </div>

                <nav className="flex justify-center">
                    <ul className={`md:flex md:items-center lg:bg-opacity-0 md:bg-opacity-0 sm:bg-opacity-50 bg-[#561D25] md:pb-0 pb-12 absolute md:static bg-opacity-50 sm:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${open ? 'top-16' : 'top-[-470px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='font-bold md:ml-8 lg:text-sm md:text-sm md:my-0 my-7'>
                                    <a href={link.link} onClick={link.handle} className='text-white hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-500'>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <button type="button" className="justify-end block lg:hidden md:hidden" onClick={() => setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" name={open ? 'close' : 'menu'} className="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </button>
            </div >
        </>
    )
}