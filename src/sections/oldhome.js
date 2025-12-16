import HomeBackground from "../assets/images/HomeBackground.jpg";
import TypingEffect from "../components/typingEffect";

export default function Home() {
    return (
        <section id="home" 
                style={{
                        backgroundImage: `url(${HomeBackground})`,
                    }}
                 className="relative h-auto 
                            lg:h-[90vh] md:min-h-[70vh] lg:h-[90vh] 
                            bg-cover bg-center w-full text-white px-4 sm:px-6 lg:px-8 flex items-center justify-center">

            {/* Background Opacity Layer */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center pt-32 pb-24 lg:py-0">
                {/* BIG TEXT */}
                <h1 className="text-4xl sm:text-6xl font-bold mb-2">
                    Hi, I'm Dennis
                </h1>

                <div className="mb-2">
                    <TypingEffect />
                </div>

                {/* SMALL TEXT */}
                <p className="text-sm sm:text-base text-gray-50 max-w-3xl leading-relaxed mb-2">
                    I build fast, scalable, and well-structured applications from backend architecture to polished user interfaces.
                    I solve real problems with clean APIs, strong authentication flows, and modern development tools.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                    href="/"
                    className="rounded-full bg-lime-400 px-4 py-2 text-sm 
                                font-semibold text-black shadow-sm 
                                hover:bg-indigo-400 hover:shadow-lg hover:-translate-y-0.5"
                    >
                    Hire Me 
                    </a>
                    <a href="/" className="text-sm font-semibold text-white
                        px-4 py-2 rounded-full
                        bg-white/10 border border-white/10
                        backdrop-blur-sm
                        transition-all duration-300

                        hover:bg-white/20 hover:border-white/40
                        hover:backdrop-blur-xl
                        hover:shadow-lg
                        hover:-translate-y-0.5">
                    Learn more â†’
                    </a>
                </div>
            </div>
        </section>
    );
}