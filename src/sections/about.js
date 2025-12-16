import { useState  , useEffect } from "react";
import CVPhoto from "../assets/images/DennisCrop.png";
import LinkedIn from "../assets/images/linkedin.png";
import Github from "../assets/images/github.png";
import Instagram from "../assets/images/instagram.png";


export default function About() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [active, setActive] = useState("profile");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById("about");
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, [hasAnimated]);

    const Highlight = ({ children }) => (
        <span className="text-lime-400 font-semibold underline decoration-lime-400/50 decoration-2 underline-offset-2">
            {children}
        </span>
    );

    const slides = ["profile", "whyme", "myvision"];
    const activeIndex = slides.indexOf(active);

    const handlePrev = () => {
        const index = slides.indexOf(active);
        if (index > 0) {
            setActive(slides[index - 1]);
        }
    };

    const handleNext = () => {
        const index = slides.indexOf(active);
        if (index < slides.length - 1) {
            setActive(slides[index + 1]);
        }
    };

    const NavItem = ({ id, label }) => (
        <button
            onClick={() => setActive(id)}
            className={`
                relative px-6 py-2.5 rounded-full text-sm font-semibold
                transition-all duration-300 backdrop-blur-sm
                border overflow-hidden group

                ${active === id
                    ? "bg-lime-400/20 border-lime-400/50 text-lime-400 shadow-lg shadow-lime-400/20"
                    : "bg-white/10 border-white/20 text-white hover:text-lime-400"
                }

                hover:bg-white/20 hover:border-lime-400/40
                hover:shadow-lg hover:shadow-lime-400/10
                hover:-translate-y-0.5
            `}
        >
            {/* Shine effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                           -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative">{label}</span>
        </button>
    );

    const NavItemAbout = ({ label, icon, href }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
                group flex items-center gap-2
                px-5 py-2.5 rounded-full
                text-sm font-medium
                text-white

                bg-white/20 border border-white/30
                backdrop-blur-sm
                transition-all duration-300

                hover:bg-lime-400 hover:border-lime-400
                hover:text-black
                hover:shadow-lg hover:shadow-lime-400/50
                hover:-translate-y-1
            "
        >
            {icon && (
                <img
                    src={icon}
                    alt=""
                    className="w-4 h-4 transition-transform group-hover:scale-110"
                />
            )}

            <span className="hidden lg:inline font-semibold">
                {label}
            </span>

            {/* Arrow icon */}
            <svg 
                className="hidden lg:inline w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </a>
    );

    return (
        <section 
            id="about" 
            className="relative w-full min-h-screen flex flex-col items-center justify-start pt-16 pb-16
                       px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white overflow-x-hidden"
            onMouseEnter={() => {
                if (!hasAnimated) {
                    setHasAnimated(true);
                }
            }}
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-lime-400/5 via-transparent to-transparent pointer-events-none" />
            
            {/* Header Title */}
            <div className={`relative inline-block mb-12 transition-all duration-700 ${
                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
                <div className="font-minecraft text-4xl md:text-5xl tracking-tight text-center">
                    About Me
                    <div className="flex items-center justify-center mt-4">
                        <span className="h-1 w-20 bg-gradient-to-r from-transparent to-lime-400 rounded-full" />
                        <span className="mx-2 w-3 h-3 bg-lime-400 rounded-full shadow-lg shadow-lime-400/50" />
                        <span className="h-1 w-20 bg-gradient-to-l from-transparent to-lime-400 rounded-full" />
                    </div>
                </div>
            </div>

            {/* CONTENT NAVIGATION BUTTON */}
            <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 pb-12 transition-all duration-700 delay-150 ${
                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
                <NavItem id="profile" label="Profile" />
                <NavItem id="whyme" label="Why Me?" />
                <NavItem id="myvision" label="My Vision" />
            </div>

            {/* CONTENT CONTAINER */}
            <div className={`relative w-full max-w-6xl 
                            min-h-[70vh] md:min-h-[60vh] lg:min-h-[70vh] 
                            bg-gradient-to-br from-neutral-800 to-neutral-900
                            text-black rounded-2xl shadow-2xl shadow-black/50
                            overflow-hidden flex items-center 
                            p-6 md:p-8 justify-center
                            border border-white/10
                            transition-all duration-700 delay-300 ${
                hasAnimated 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
            }`}>
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-lime-400/30 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-lime-400/30 rounded-br-2xl" />

                {/* LEFT BUTTON */}
                <button
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    className={`
                        hidden md:flex
                        absolute top-0 left-0 z-30
                        h-full px-6
                        items-center justify-center
                        cursor-pointer
                        group
                        transition-opacity duration-300

                        ${activeIndex === 0
                            ? "opacity-0 pointer-events-none"
                            : "opacity-70 hover:opacity-100"}
                    `}
                    aria-label="Previous"
                >
                    <span className="
                        inline-flex items-center justify-center
                        w-12 h-12 rounded-full
                        bg-lime-400/20 border-2 border-lime-400/40
                        backdrop-blur-md
                        transition-all duration-300
                        group-hover:bg-lime-400/30
                        group-hover:border-lime-400/60
                        group-hover:scale-110
                        group-hover:shadow-lg group-hover:shadow-lime-400/50
                    ">
                        <svg
                            className="w-6 h-6 text-lime-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </span>
                </button>
                
                {/* RIGHT BUTTON */}
                <button
                    onClick={handleNext}
                    disabled={activeIndex === slides.length - 1}
                    className={`
                        hidden md:flex
                        absolute top-0 right-0 z-30
                        h-full px-6
                        items-center justify-center
                        cursor-pointer
                        group
                        transition-opacity duration-300

                        ${activeIndex === slides.length - 1
                            ? "opacity-0 pointer-events-none"
                            : "opacity-70 hover:opacity-100"}
                    `}
                    aria-label="Next"
                >
                    <span className="
                        inline-flex items-center justify-center
                        w-12 h-12 rounded-full
                        bg-lime-400/20 border-2 border-lime-400/40
                        backdrop-blur-md
                        transition-all duration-300
                        group-hover:bg-lime-400/30
                        group-hover:border-lime-400/60
                        group-hover:scale-110
                        group-hover:shadow-lg group-hover:shadow-lime-400/50
                    ">
                        <svg
                            className="w-6 h-6 text-lime-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </span>
                </button>
                
                {/* Slide indicator dots (mobile only) */}
                <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30 pt-10">
                    {slides.map((slide, idx) => (
                        <button
                            key={slide}
                            onClick={() => setActive(slide)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === activeIndex 
                                    ? 'bg-lime-400 w-6' 
                                    : 'bg-white/30 hover:bg-white/50'
                            }`}
                            aria-label={`Go to ${slide}`}
                        />
                    ))}
                </div>

                {/* CONTENT CARD */}
                <div
                    className="flex h-full w-full transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                >
                    <div className="w-full h-full flex-shrink-0">
                        {/* "Profile" CONTENT */}
                        {active === "profile" && (
                            <div className="w-full h-full
                                            flex flex-col lg:flex-row
                                            items-center justify-center
                                            gap-8 lg:gap-16
                                            px-4 lg:px-8">
                                {/* Photo with enhanced styling */}
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-green-500 
                                                  rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
                                    <img
                                        src={CVPhoto}
                                        alt="Dennis Huang"
                                        className="relative w-56 h-64 sm:w-72 sm:h-80 rounded-xl object-cover 
                                                 shadow-2xl border-2 border-lime-400/20
                                                 transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>

                                {/* JSON Info with enhanced styling */}
                                <div className="w-full lg:w-auto">
                                    <pre className="text-green-400 font-mono text-sm sm:text-base lg:text-lg
                                                    leading-relaxed whitespace-pre-wrap break-words
                                                    bg-black/20 p-6 rounded-xl border border-lime-400/20
                                                    backdrop-blur-sm max-w-lg">
                                        <div>
                                            <span className="text-white">{`{`}</span>
                                            {"\n"}
                                            <span className="text-[#9cdcfe]">  "name"</span>
                                            <span className="text-white">: </span>
                                            <span className="text-lime-400">"Dennis Huang"</span>
                                            <span className="text-white">,</span>
                                            {"\n"}
                                            <span className="text-[#9cdcfe]">  "role"</span>
                                            <span className="text-white">: </span>
                                            <span className="text-lime-400">"Software Engineer"</span>
                                            <span className="text-white">,</span>
                                            {"\n"}
                                            <span className="text-[#9cdcfe]">  "location"</span>
                                            <span className="text-white">: </span>
                                            <span className="text-lime-400">"Batam, Indonesia"</span>
                                            <span className="text-white">,</span>
                                            {"\n"}
                                            <span className="text-[#9cdcfe]">  "age"</span>
                                            <span className="text-white">: </span>
                                            <span className="text-lime-400">22</span>
                                            <span className="text-white">,</span>
                                            {"\n"}
                                            <span className="text-[#9cdcfe]">  "email"</span>
                                            <span className="text-white">: </span>
                                            <span className="text-lime-400">"dennis.huang03@gmail.com"</span>
                                            {"\n"}
                                            <span className="text-white">{`}`}</span>
                                        </div>
                                    </pre>
                                    
                                    <div className="pt-6 flex flex-wrap justify-center lg:justify-start items-center gap-3">
                                        <NavItemAbout 
                                            label="LinkedIn" 
                                            icon={LinkedIn}
                                            href="https://www.linkedin.com/in/dennishuang03"
                                        />
                                        <NavItemAbout 
                                            label="GitHub" 
                                            icon={Github}
                                            href="https://www.github.com/dennishuang03-hub"
                                        />
                                        <NavItemAbout 
                                            label="Instagram" 
                                            icon={Instagram}
                                            href="https://www.instagram.com/dnnis_huang"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="w-full h-full flex-shrink-0">
                        {/* "Why Me?" CONTENT */}
                        {active === "whyme" && (
                            <div className="w-full h-full
                                            flex items-center justify-center
                                            px-6 lg:px-12">
                                <div className="font-mono max-w-3xl text-base sm:text-lg lg:text-xl 
                                              text-gray-100 leading-relaxed space-y-6">
                                    <p className="text-justify">
                                        I have delivered <Highlight>production-ready software</Highlight> that cut down on <Highlight>manual work</Highlight>, <Highlight>reduced errors</Highlight>, and <Highlight>improved workflow efficiency</Highlight>. 
                                        I worked directly with <Highlight>real users</Highlight> and <Highlight>faced real problems</Highlight>. This experience taught me to think beyond code. I learned how systems are really used, where they fail, and how small design choices can add up over time.
                                    </p>

                                    <p className="text-justify">
                                        I enhance my skills and knowledge as I love to explore new things in new environments.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="w-full h-full flex-shrink-0">
                        {/* "My Vision" CONTENT */}
                        {active === "myvision" && (
                            <div className="w-full h-full
                                            flex items-center justify-center
                                            px-6 lg:px-12">
                                <div className="font-mono max-w-3xl text-base sm:text-lg lg:text-xl 
                                              text-gray-100 leading-relaxed space-y-6">
                                    <p className="text-justify">
                                        I want to grow as a developer by <Highlight>taking responsibility</Highlight> for the software I create. 
                                        This includes <Highlight>understanding client needs</Highlight> and <Highlight>delivering reliable</Highlight>, 
                                        <Highlight>well-structured solutions</Highlight> that perform well in real-world settings.
                                    </p>

                                    <p className="text-justify">
                                        I care about building software that not only works correctly but is also <Highlight>maintainable</Highlight>, <Highlight>secure</Highlight>, and <Highlight>meets</Highlight> client expectations. 
                                        This way, it can provide lasting value beyond the initial delivery.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}