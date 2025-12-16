import { useState, useEffect } from "react";

export default function Timeline() {
    const [hasAnimated, setHasAnimated] = useState(false);

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

        const section = document.getElementById("timeline");
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, [hasAnimated]);

    const timelineData = [
        {
            id: 1,
            date: "2019 - 2021",
            title: "Maha Bodhi Senior High School",
            subtitle: "High School Diploma",
            description: "Completed secondary education with a strong foundation in mathematics, logical reasoning, and early exposure to computer science.",
            type: "education",
            side: "right"
        },
        {
            id: 2,
            date: "2021 - 2025",
            title: "Xiamen University Malaysia",
            subtitle: "Bachelor of Computer Science & Technology (Hons)",
            description: "Completed a bachelor's degree with a strong focus on software engineering, backend development, databases, and system design.",
            type: "education",
            side: "left"
        },
        {
            id: 3,
            date: "Aug 2024 - Jan 2025",
            title: "Software Engineer Intern",
            subtitle: "Redtone Sdn Bhd",
            description: "Developed production-ready Worker Identification System that improved operational efficiency by 60%. Worked with Flask, MySQL, Docker, and REST APIs.",
            type: "work",
            side: "right"
        },
        {
            id: 4,
            date: "Apr 2025 - Jul 2025",
            title: "Final Year Project",
            subtitle: "BMDS-ZKP: Secure Electronic Health Records",
            description: "Built a secure EHR system with Zero-Knowledge Proofs, blockchain audit logging, and IPFS storage. Implemented advanced cryptographic techniques for privacy-preserving healthcare data management.",
            type: "education",
            side: "left"
        },
        {
            id: 5,
            date: "Present",
            title: "Independent Full-Stack Projects",
            subtitle: "Self-Directed Development",
            description: "Building TeamOps HR platform with ASP.NET Core and React. Creating modern web applications with focus on scalability, security, and user experience.",
            type: "work",
            side: "right"
        }
    ];

    const TimelineItem = ({ item, index }) => (
        <div 
            className={`
                relative flex items-center w-full mb-12
                ${item.side === "left" ? "flex-row-reverse" : "flex-row"}
                transition-all duration-700 ease-out
                ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            {/* Content Card */}
            <div className={`
                w-full md:w-5/12
                ${item.side === "left" ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}
            `}>
                <div className={`
                    group relative p-6 rounded-xl
                    bg-gradient-to-br ${item.type === "education" ? "from-lime-400/10 to-lime-500/5" : "from-neutral-800 to-neutral-900"}
                    border ${item.type === "education" ? "border-lime-400/30" : "border-white/10"}
                    shadow-lg hover:shadow-2xl
                    transition-all duration-300
                    hover:-translate-y-1
                    ${item.type === "education" ? "hover:shadow-lime-400/20" : "hover:shadow-white/10"}
                `}>
                    {/* Date Badge */}
                    <div className={`
                        inline-block px-4 py-1.5 mb-3 rounded-full text-xs font-bold
                        ${item.type === "education" 
                            ? "bg-lime-400/20 text-lime-400 border border-lime-400/40" 
                            : "bg-white/10 text-white border border-white/20"}
                    `}>
                        {item.date}
                    </div>

                    {/* Title */}
                    <h3 className={`
                        text-xl font-bold mb-2
                        ${item.type === "education" ? "text-lime-400" : "text-white"}
                    `}>
                        {item.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-gray-400 font-semibold text-sm mb-3">
                        {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                    </p>

                    {/* Corner accent */}
                    <div
                    className={`
                        absolute top-0 ${item.side === "left" ? "left-0" : "right-0"}
                        w-12 h-12
                        ${item.type === "education"
                        ? item.side === "left"
                            ? "border-t-2 border-l-2 border-lime-400/30 rounded-tl-xl"
                            : "border-t-2 border-r-2 border-lime-400/30 rounded-tr-xl"
                        : item.side === "left"
                            ? "border-t-2 border-l-2 border-white/10 rounded-tl-xl"
                            : "border-t-2 border-r-2 border-white/10 rounded-tr-xl"
                        }
                    `}
                    />
                </div>
            </div>

            {/* Center Timeline */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
                {/* Dot */}
                <div className={`
                    w-5 h-5 rounded-full z-10
                    ${item.type === "education" 
                        ? "bg-lime-400 ring-4 ring-lime-400/20 shadow-lg shadow-lime-400/50" 
                        : "bg-white ring-4 ring-white/20 shadow-lg shadow-white/20"}
                    transition-all duration-300
                    group-hover:scale-125
                `} />
            </div>

            {/* Empty space for other side */}
            <div className="hidden md:block w-5/12" />
        </div>
    );

    return (
        <section 
            id="timeline" 
            className="relative w-full min-h-screen flex flex-col items-center justify-start pt-16 pb-16
                       px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white overflow-x-hidden"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-lime-400/5 via-transparent to-transparent pointer-events-none" />
            
            {/* Header Title */}
            <div className={`
                relative inline-block mb-16 transition-all duration-700
                ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
            `}>
                <p className="font-minecraft text-4xl md:text-5xl tracking-tight">
                    Education & Experience
                </p>
                <div className="flex items-center justify-center mt-4">
                    <span className="h-1 w-20 bg-gradient-to-r from-transparent to-lime-400 rounded-full" />
                    <span className="mx-2 w-3 h-3 bg-lime-400 rounded-full shadow-lg shadow-lime-400/50" />
                    <span className="h-1 w-20 bg-gradient-to-l from-transparent to-lime-400 rounded-full" />
                </div>
            </div>

            {/* Timeline Container */}
            <div className="relative w-full max-w-6xl">
                {/* Vertical Line (desktop only) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400 via-white/20 to-lime-400 -translate-x-1/2" />

                {/* Timeline Items */}
                <div className="relative">
                    {timelineData.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>

            {/* Bottom decoration */}
            <div className={`
                mt-8 transition-all duration-700 delay-1000
                ${hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
            </div>
        </section>
    );
}