import { useState, useEffect } from "react";
import TypingEffect from "../components/typingEffect";
import { scrollToSection } from "../utils/scrollToSection";


export default function Homes() {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        const timer = setTimeout(() => setHasAnimated(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section 
            id="home" 
            className="relative h-screen w-full text-white overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-neutral-900 to-black">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" 
                         style={{
                             backgroundImage: `radial-gradient(circle at 2px 2px, rgb(134, 239, 172) 1px, transparent 0)`,
                             backgroundSize: '40px 40px'
                         }} 
                    />
                </div>
                
                {/* Animated gradient orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse" 
                     style={{ animationDelay: '1s' }} />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                
                {/* Greeting with animation */}
                <div className={`
                    transition-all duration-1000 ease-out
                    ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
                `}>
                    {/* <p className="text-lime-400 font-semibold text-base sm:text-lg mb-3 tracking-wide">
                        Welcome to my portfolio
                    </p> */}
                </div>

                {/* Main Heading with staggered animation */}
                <div className={`
                    transition-all duration-1000 ease-out delay-150
                    ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
                `}>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-mono font-bold mb-4 leading-tight">
                        Hi, I'm{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">
                                Dennis
                            </span>
                            {/* Underline decoration */}
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-lime-500 rounded-full" />
                        </span>
                    </h1>
                </div>

                {/* Typing Effect with animation */}
                <div className={`
                    text-2xl sm:text-3xl lg:text-4xl mb-6 min-h-[3rem]
                    transition-all duration-1000 ease-out delay-300 font-mono
                    ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
                `}>
                    <TypingEffect />
                </div>

                {/* Description with animation */}
                <div className={`
                    transition-all duration-1000 ease-out delay-500
                    ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
                `}>
                    <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed mb-10 px-4 font-mono">
                        I build fast, scalable, and well-structured applications from backend architecture to polished user interfaces.
                        I solve real problems with clean APIs, strong authentication flows, and modern development tools.
                    </p>
                </div>

                {/* CTA Buttons with animation */}
                <div className={`
                    flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6
                    transition-all duration-1000 ease-out delay-700
                    ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}>

                    {/* HIRE ME BUTTON */}
                    <button
                        type="button"
                        onClick={() => scrollToSection("contact")}
                        className="
                            group relative overflow-hidden
                            px-8 py-3.5 rounded-full
                            text-base font-semibold text-black

                            bg-gradient-to-r from-lime-400 to-lime-500
                            shadow-lg shadow-lime-400/30

                            transition-all duration-300
                            hover:-translate-y-1
                            hover:shadow-xl hover:shadow-lime-400/50
                            active:scale-95

                            focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2
                        "
                        >
                        <span className="relative z-10 flex items-center gap-2">
                            Hire Me
                            <span className="text-lg">→</span>
                        </span>

                        {/* glow hover layer */}
                        <span
                            className="
                            absolute inset-0
                            bg-gradient-to-r from-lime-300 to-lime-500
                            opacity-0
                            transition-opacity duration-300
                            group-hover:opacity-100
                            "
                        />
                    </button>

                    {/* <a 
                        href="#about" 
                        className="
                            group relative
                            px-8 py-3.5 rounded-full
                            text-base font-semibold text-white
                            bg-white/10 border-2 border-white/20
                            backdrop-blur-sm
                            transition-all duration-300
                            hover:bg-white/20 hover:border-lime-400/50
                            hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20
                            active:scale-95
                        "
                    >
                        <span className="flex items-center gap-2">
                            Learn More
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                      d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </a> */}
                    <button
                        type="button"
                        onClick={() => scrollToSection("about")}
                        className="
                            group relative
                            px-8 py-3.5 rounded-full
                            text-base font-semibold text-white

                            bg-white/10 border-2 border-white/20
                            backdrop-blur-sm

                            transition-all duration-300
                            hover:bg-white/20
                            hover:border-lime-400/50
                            hover:-translate-y-1
                            hover:shadow-lg hover:shadow-white/20
                            active:scale-95

                            focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2
                        "
                        >
                        <span className="flex items-center gap-2">
                            Learn More
                            <span
                            className="
                                transition-transform duration-300
                                group-hover:translate-x-1
                            "
                            >
                            →
                            </span>
                        </span>
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className={`
                    absolute bottom-10 left-1/2 -translate-x-1/2
                    transition-all duration-1000 ease-out delay-1000
                    ${hasAnimated ? 'opacity-100' : 'opacity-0'}
                `}>
                    <div className="flex flex-col items-center gap-2 animate-bounce">
                        <span className="text-sm text-gray-400 font-medium">Scroll Down</span>
                        <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            <div className="absolute top-40 right-20 w-3 h-3 bg-lime-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-lime-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </section>
    );
}