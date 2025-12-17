import { useState, useEffect } from "react";
import ContactMe from "../assets/images/ContactMe.jpg";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [formStatus, setFormStatus] = useState(null);

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

        const section = document.getElementById("contact");
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, [hasAnimated]);

    const handleChange = (e) => {
                setFormData({
                    ...formData,
                    [e.target.name]: e.target.value
                });
            };

            const handleSubmit = (e) => {
        e.preventDefault();

        console.log("📨 Form data being sent:", formData);

        setFormStatus("sending");

        emailjs.send(
            "service_hlkb5rd",
            "template_hfk3q4d",
            {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            },
            "PYrpGC7cVF04C3kMY"
        )
        .then((result) => {
            console.log("✅ EmailJS success:", result);
            setFormStatus("success");
        })
        .catch((error) => {
            console.error("❌ EmailJS error:", error);
            setFormStatus("error");
        });
    };



    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: "Email",
            value: "dennis.huang03@gmail.com",
            link: "mailto:dennis.huang03@gmail.com"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: "Phone",
            value: "(+62) 812-7040-0400",
            link: "tel:+6281270400400"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: "Location",
            value: "Batam, Indonesia",
            link: null
        }
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            url: "https://www.linkedin.com/in/dennishuang03"
        },
        {
            name: "GitHub",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            url: "https://www.github.com/dennishuang03-hub"
        },
        {
            name: "Instagram",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            ),
            url: "https://www.instagram.com/dnnis_huang"
        }
    ];

    return (
        <section 
            id="contact" 
            className="relative w-full min-h-screen flex flex-col items-center justify-start pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-x-hidden"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-lime-400/5 via-transparent to-transparent pointer-events-none" />
            
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            <div className="absolute top-40 right-20 w-3 h-3 bg-lime-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-lime-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Header Title */}
            <div className={`
                relative inline-block mb-12 transition-all duration-700
                ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
            `}>
                <h2 className="font-minecraft text-4xl md:text-5xl tracking-tight text-center">
                    Get In Touch
                </h2>
                <div className="flex items-center justify-center mt-4">
                    <span className="h-1 w-20 bg-gradient-to-r from-transparent to-lime-400 rounded-full" />
                    <span className="mx-2 w-3 h-3 bg-lime-400 rounded-full shadow-lg shadow-lime-400/50" />
                    <span className="h-1 w-20 bg-gradient-to-l from-transparent to-lime-400 rounded-full" />
                </div>
            </div>

            {/* Subtitle */}
            <p className={`
                text-gray-400 text-center max-w-2xl mb-16 transition-all duration-700 delay-150
                ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
            `}>
                Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
            </p>

            {/* Main Content */}
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Left Side - Contact Info & Photo */}
                <div className={`
                    space-y-8 transition-all duration-700 delay-300
                    ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                `}>
                    {/* Photo Card */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
                        <div className="relative bg-neutral-900 rounded-2xl p-6 border border-lime-400/20">
                            <img
                                src={ContactMe}
                                alt="Dennis Huang"
                                className="w-full h-64 object-cover rounded-xl mb-4"
                            />
                            <h3 className="text-2xl font-bold text-lime-400 mb-2">Dennis Huang</h3>
                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20
                                                 flex items-center justify-center
                                                 text-white hover:text-black hover:bg-lime-400 hover:border-lime-400
                                                 transition-all duration-300 hover:-translate-y-1
                                                 hover:shadow-lg hover:shadow-lime-400/50"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Information Cards */}
                    <div className="space-y-4">
                        {contactInfo.map((info) => (
                            <div
                                key={info.label}
                                className="group relative bg-neutral-900 rounded-xl p-5 border border-white/10
                                         hover:border-lime-400/50 transition-all duration-300
                                         hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/20"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-lime-400/20 border border-lime-400/40
                                                  flex items-center justify-center text-lime-400 flex-shrink-0
                                                  group-hover:bg-lime-400 group-hover:text-black transition-all duration-300">
                                        {info.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-gray-400 text-sm mb-1">{info.label}</h4>
                                        {info.link ? (
                                            <a 
                                                href={info.link}
                                                className="text-white font-semibold hover:text-lime-400 transition-colors break-all"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-white font-semibold">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className={`
                    transition-all duration-700 delay-500
                    ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                `}>
                    <div className="bg-neutral-900 rounded-2xl p-8 border border-white/10">
                        <h3 className="text-2xl font-bold text-lime-400 mb-6">Send a Message</h3>
                        
                        <div className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg
                                             bg-black/50 border border-white/20
                                             text-white placeholder-gray-500
                                             focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20
                                             transition-all duration-300"
                                    placeholder="Smith Stone"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg
                                             bg-black/50 border border-white/20
                                             text-white placeholder-gray-500
                                             focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20
                                             transition-all duration-300"
                                    placeholder="Smith@example.com"
                                />
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg
                                             bg-black/50 border border-white/20
                                             text-white placeholder-gray-500
                                             focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20
                                             transition-all duration-300"
                                    placeholder="Subject"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg
                                             bg-black/50 border border-white/20
                                             text-white placeholder-gray-500
                                             focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20
                                             transition-all duration-300 resize-none"
                                    placeholder="Send me a message..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                disabled={formStatus === "sending"}
                                className="w-full group relative overflow-hidden
                                         bg-gradient-to-r from-lime-400 to-lime-500
                                         text-black font-semibold py-4 rounded-lg
                                         shadow-lg shadow-lime-400/30
                                         transition-all duration-300
                                         hover:shadow-xl hover:shadow-lime-400/50
                                         hover:-translate-y-0.5
                                         disabled:opacity-50 disabled:cursor-not-allowed
                                         active:scale-95"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                               -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <span className="relative flex items-center justify-center gap-2">
                                    {formStatus === "sending" ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : formStatus === "success" ? (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </span>
                            </button>

                            {/* Success Message */}
                            {formStatus === "success" && (
                                <div className="p-4 rounded-lg bg-lime-400/10 border border-lime-400/30 text-lime-400 text-sm text-center">
                                    Thank you! I'll get back to you soon.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}