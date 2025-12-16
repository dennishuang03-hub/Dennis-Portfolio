import { useState, useEffect } from "react";
import downloadIcon from "../assets/icons/downloads.png";
import { scrollToSection } from "../utils/scrollToSection";



export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [isManualScroll, setIsManualScroll] = useState(false);

    const sections = ["home", "about", "project", "stack", "timeline", "contact"];
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isManualScroll) return; 
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -50% 0px", }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [isManualScroll]); 

    // UNDERLINE
    const NavItem = ({ id, label }) => (
        <button
            onClick={() => scrollToSection(id)}
            className={`font-minecraft px-5 py-2 relative group transition hover:-translate-y-0.5
                ${active === id ? "text-lime-400" : "text-white"}
            `}
        >
            {label}
            <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-lime-400 w-full 
                    transition-transform duration-300 ease-out 
                    ${active === id ? "scale-x-100" : "scale-x-0"}
                    group-hover:scale-x-100`}
            />
        </button>
    );

    return (
        <header className="fixed rounded-b-lg top-0 left-0 w-full z-50 bg-zinc-900">
            <nav className="h-[80px] w-full flex items-center justify-between px-4 sm:px-6 lg:px-20">

                {/* LOGO */}
                <div
                    className="font-minecraft text-5xl italic font-bold tracking-tight text-lime-400 cursor-pointer"
                    onClick={() => scrollToSection("home")}
                >
                    DH
                </div>

                {/* DESKTOP NAV */}
                <div className="hidden sm:flex items-center gap-x-6">
                    <NavItem id="home" label="Home" />
                    <NavItem id="about" label="About" />
                    <NavItem id="project" label="Project" />
                    <NavItem id="stack" label="Stack" />
                    <NavItem id="timeline" label="Timeline" />
                    <NavItem id="contact" label="Contact" />
                </div>

                {/* RESUME BUTTON */}
                <div className="hidden sm:flex">
                    <a
                        href="/Dennis_Huang_Resume.pdf"
                        download
                        className="bg-lime-400 font-minecraft text-black px-7 py-2 rounded-full flex items-center gap-2 hover:-translate-y-0.5"
                        >
                        Resume
                        <img src={downloadIcon} alt="download" className="w-4 h-4" />
                    </a>
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    className="sm:hidden absolute right-4 text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </nav>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="sm:hidden bg-zinc-800 text-white flex flex-col items-center gap-6 py-6">
                    {sections.map((id) => (
                        <button
                            key={id}
                            onClick={() => {
                                scrollToSection(id);
                                setIsOpen(false);
                            }}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </button>
                    ))}

                    <a
                        href="/Dennis_Huang_Resume.pdf"
                        download
                        className="bg-lime-400 text-black font-minecraft px-6 py-2 rounded-full flex items-center gap-2"
                        >
                        Resume
                        <img src={downloadIcon} alt="download" className="w-3 h-3" />
                    </a>
                </div>
            )}
        </header>
    );
}
