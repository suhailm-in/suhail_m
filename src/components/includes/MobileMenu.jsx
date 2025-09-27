const MobileMenu = ({ menu0pen, setMenuOpen }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
                            ${
                                menu0pen
                                    ? "h-screen opacity-100 pointer-events-auto"
                                    : "h-0 opacity-0 pointer-events-none"
                            }`}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-7 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
                    menu0pen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                }`}
            >
                Home
            </a>
            <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
                    menu0pen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                }`}
            >
                About
            </a>
            <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
                    menu0pen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                }`}
            >
                Project
            </a>
            <a
                href="#article"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
                    menu0pen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                }`}
            >
                Article
            </a>
            <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
                    menu0pen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                }`}
            >
                Contact
            </a>
        </div>
    );
};

export default MobileMenu;
