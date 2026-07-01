import { useState, useEffect } from "react";
import downloadIcon from "../assets/icons/downloads.png";
import { scrollToSection } from "../utils/scrollToSection";

const sections = ["home", "about", "project", "stack", "timeline", "contact"];
const labels = {
    home: "Home",
    about: "About",
    project: "Projects",
    stack: "Stack",
    timeline: "Timeline",
    contact: "Contact",
};

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    // Highlight the section currently in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -50% 0px" }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Glass/solid state on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const NavItem = ({ id, label }) => (
        <button
            onClick={() => scrollToSection(id)}
            className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 group
                ${active === id ? "text-lime-400" : "text-gray-300 hover:text-white"}
            `}
        >
            {label}
            <span
                className={`absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-lime-400 to-lime-500
                    origin-left transition-transform duration-300 ease-out
                    ${active === id ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100`}
            />
        </button>
    );

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
                ${scrolled
                    ? "bg-neutral-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30"
                    : "bg-transparent border-b border-transparent"}
            `}
        >
            <nav
                className={`w-full flex items-center justify-between px-4 sm:px-6 lg:px-12 transition-all duration-300
                    ${scrolled ? "h-[68px]" : "h-[80px]"}`}
            >
                {/* LOGO */}
                <button
                    onClick={() => scrollToSection("home")}
                    className="group flex items-center gap-2.5 cursor-pointer"
                    aria-label="Back to top"
                >
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl
                                     bg-gradient-to-br from-lime-400 to-lime-500 text-black
                                     font-display font-bold text-lg tracking-tight
                                     shadow-lg shadow-lime-400/25
                                     transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                        DH
                    </span>
                    <span className="hidden sm:block font-display font-semibold text-white text-lg tracking-tight">
                        Dennis<span className="text-lime-400">.</span>
                    </span>
                </button>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-x-1
                                rounded-full px-2 py-1
                                bg-white/5 border border-white/10 backdrop-blur-sm">
                    {sections.map((id) => (
                        <NavItem key={id} id={id} label={labels[id]} />
                    ))}
                </div>

                {/* RESUME BUTTON */}
                <div className="hidden md:flex">
                    <a
                        href={`${process.env.PUBLIC_URL}/DennisHuang_Resume.pdf`}
                        download
                        className="group flex items-center gap-2 rounded-full px-6 py-2.5
                                   bg-gradient-to-r from-lime-400 to-lime-500 text-black
                                   text-sm font-semibold shadow-lg shadow-lime-400/25
                                   transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lime-400/40"
                    >
                        Resume
                        <img src={downloadIcon} alt="" className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                    </a>
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
                </button>
            </nav>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-out
                    bg-neutral-950/95 backdrop-blur-xl border-b border-white/10
                    ${isOpen ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="flex flex-col px-6 py-4 gap-1">
                    {sections.map((id) => (
                        <button
                            key={id}
                            onClick={() => {
                                scrollToSection(id);
                                setIsOpen(false);
                            }}
                            className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors
                                ${active === id ? "text-lime-400 bg-lime-400/10" : "text-gray-200 hover:bg-white/5"}`}
                        >
                            {labels[id]}
                        </button>
                    ))}

                    <a
                        href={`${process.env.PUBLIC_URL}/DennisHuang_Resume.pdf`}
                        download
                        onClick={() => setIsOpen(false)}
                        className="mt-2 bg-gradient-to-r from-lime-400 to-lime-500 text-black font-semibold
                                   px-6 py-3 rounded-lg flex items-center justify-center gap-2"
                    >
                        Download Resume
                        <img src={downloadIcon} alt="" className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </header>
    );
}
