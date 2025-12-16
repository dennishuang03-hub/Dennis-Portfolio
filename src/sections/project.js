import { useState, useEffect } from "react";
import WIS from "../assets/images/WIS.jpeg";
import Portfolio from "../assets/images/Portfolio.png";
import BMDS from "../assets/images/BMDS-ZKP.png";
import InProgress from "../assets/images/In progress.png";

export default function Project() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Intersection Observer for animation
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

        const section = document.getElementById("project");
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, [hasAnimated]);

    // Project data with detailed information
    const projects = [
        {
            id: 1,
            title: "Worker Identification System (WIS)",
            description: "A production-ready worker identification system that automated staff credential management and improved operational workflow efficiency by 60%.",
            technologies: ["Python", "Flask", "MySQL", "HTML5", "Bootstrap", "CSS", "JavaScript", "Docker", "REST API", "Keycloak", "GitLab"],
            image: WIS,
            github: "https://github.com/dennishuang03-hub/WIS",
            detailedDescription: `
                <h3 class="text-xl font-bold text-lime-400 mb-3">Overview</h3>
                <p class="mb-4 text-justify">The Worker Identification System (WIS) is a web application ready for production. It digitizes worker identification and credential management for internal use. The system brings together worker records, certificates, and verification processes into one platform. This helps HR teams and site supervisors in their daily tasks. The system was created to replace inconsistent manual processes with a dependable, secure, and easy-to-maintain platform that operates in real work environments.</p>
                
                <h3 class="text-xl font-bold text-lime-400 mb-3">Key Features</h3>
                <ul class="list-disc list-inside space-y-2 mb-4">
                    <li>Worker status management</li>
                    <li>Unique barcode generation for each worker</li>
                    <li>Web-based QR/barcode scanning</li>
                    <li>Centralized management of internal and external worker certificates</li>
                    <li>Certificate status tracking, including expired certificates and newly added certifications</li>
                    <li>Automated worker credential verification</li>
                    <li>Real-time access control and monitoring</li>
                    <li>Automated Warning Letter Generation</li>
                    <li>Automated Excel Report Generation for workers, certificates, and QR scan activity</li>
                    <li>Role-based access control with Keycloak</li>
                    <li>Comprehensive audit logging</li>
                </ul>
                
                <h3 class="text-xl font-bold text-lime-400 mb-3">Technical Highlights</h3>
                <ul class="list-disc list-inside space-y-2 mb-4">
                    <li>Backend built using Flask with a RESTful API architecture</li>
                    <li>Frontend developed using HTML, CSS, JavaScript, and Bootstrap</li>
                    <li>Docker containerization for easy deployment</li>
                    <li>MySQL database with optimized queries</li>
                    <li>Source control and collaboration via Git and GitLab CI/CD</li>
                </ul>
                
                <h3 class="text-xl font-bold text-lime-400 mb-3">Impact</h3>
                <p class="text-justify">The system provided a 60% improvement in workflow efficiency by using automation for worker identification and verification. It increased compliance visibility by clearly showing expired certificates and terminated workers, which helped HR teams take action in advance. Site supervisors also gained from quicker and more dependable on-site verification. This reduced delays and lessened human error during daily operations.</p>
            `
        },
        {
            id: 2,
            title: "BMDS-ZKP: Secure Electronic Health Records",
            description: "A secure EHR web application, integrating CP-ABSE and Schnorr Zero-Knowledge Proofs for privacy-preserving access control, with Ethereum-based tamper-proof audit logging.",
            technologies: ["Python", "Flask", "Bootstrap", "JavaScript", "Docker", "MySQL", "Ethereum", "IPFS", "Web3.py", "Cryptography", "GitHub"],
            image: BMDS,
            github: "https://github.com/dennishuang03-hub/BMDS-ZKP",
            detailedDescription: `
                <h3 class="text-xl font-bold text-lime-400 mb-3">Overview</h3>
                <p class="mb-4 text-justify">The BMDS-ZKP (Blockchain-based Medical Data System with Zero-Knowledge Proofs) is a secure electronic health record (EHR) web application designed to protect sensitive medical data while ensuring controlled and verifiable access. The system integrates cryptographic access control, zero-knowledge proofs, and blockchain-based audit logging to prevent unauthorized data access and data tampering. BMDS-ZKP was developed to address real privacy, integrity, and trust challenges in healthcare systems, where confidentiality and accountability are critical.</p>
                
                <h3 class="text-xl font-bold text-lime-400 mb-3">Key Features</h3>
                <ul class="list-disc list-inside space-y-2 mb-4">
                    <li>Secure electronic health record (EHR) management</li>
                    <li>Ciphertext-Policy Attribute-Based Searchable Encryption (CP-ABSE)</li>
                    <li>Schnorr Zero-Knowledge Proofs for privacy-preserving authentication</li>
                    <li>Ethereum blockchain for immutable audit trails</li>
                    <li>AES-encrypted medical record storage</li>
                    <li>IPFS integration for decentralized storage</li>
                    <li>Fine-grained access control policies</li>
                </ul>
                
                <h3 class="text-xl font-bold text-lime-400 mb-3">Security Architecture</h3>
                <ul class="list-disc list-inside space-y-2 mb-4">
                    <li>Backend Flask framework with a secure RESTful architecture</li>
                    <li>Implementation of CP-ABSE for access policies</li>
                    <li>Integration of Schnorr Zero-Knowledge Proofs to validate access without revealing sensitive information</li>
                    <li>Ethereum smart contract integration for immutable audit logs</li>
                    <li>Zero-knowledge authentication without revealing credentials</li>
                    <li>Decentralized file storage with IPFS</li>
                    <li>Containerized development using Docker</li>
                    <li>Database management using MySQL for metadata and access records</li>
                </ul>
                
                <h3 class="text-xl font-bold text-lime-400 mb-3">Impact</h3>
                <p class="text-justify">The system improved data confidentiality and access accuracy by approximately 40% through the use of cryptographic access control and zero-knowledge verification. By leveraging blockchain-based audit logging, BMDS-ZKP provided tamper-proof access trails, reducing audit verification time by around 50%. Overall, the system increased record retrieval reliability while significantly reducing manual validation overhead, demonstrating a practical and secure approach to managing sensitive healthcare data.</p>
            `
        },
        {
            id: 3,
            title: "TeamOps: HR & Workforce Operations Platform",
            description: "A task management platform enabling HR teams, managers, and employees to manage records, assign tasks, and track progress through role-based access control and scalable APIs.",
            technologies: ["ASP.NET Core Web API", "React.js", "MySQL", "Tailwind CSS", "JWT Auth"],
            image: InProgress,
            github: "https://github.com/dennishuang03-hub/TeamOps",
            detailedDescription: `
                <h3 class="text-xl font-bold text-lime-400 mb-3">Overview</h3>
                <p class="mb-4 text-justify">TeamOps is an ongoing project aimed at creating a comprehensive HR and workforce management solution with modern architecture and user experience.</p>
                
                <h3 class="text-xl font-bold text-lime-400 mb-3">Key Features</h3>
                <ul class="list-disc list-inside space-y-2 mb-4">
                    <li>Employee record management and tracking</li>
                    <li>Task assignment and progress monitoring</li>
                    <li>Role-based access control (HR, Manager, Employee)</li>
                    <li>Real-time notifications and updates</li>
                    <li>Performance analytics and reporting</li>
                </ul>
                
                <h3 class="text-xl font-bold text-lime-400 mb-3">Technical Stack</h3>
                <ul class="list-disc list-inside space-y-2 mb-4">
                    <li>ASP.NET Core Web API for robust backend services</li>
                    <li>React.js with modern hooks for dynamic frontend</li>
                    <li>MySQL for relational data management</li>
                    <li>Tailwind CSS for responsive UI design</li>
                </ul>
                
                <h3 class="text-xl font-bold text-lime-400 mb-3">Current Status</h3>
                <p class="text-justify">This project is currently in active development, with core features being implemented and refined based on user feedback and requirements.</p>
            `
        },
        {
            id: 4,
            title: "Dennis's Portfolio",
            description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
            technologies: ["React.js", "Tailwind CSS"],
            image: Portfolio,
            github: "https://github.com/dennishuang03-hub/Dennis-Portfolio",
            detailedDescription: `
                <h3 class="text-xl font-bold text-lime-400 mb-3">Overview</h3>
                <p class="mb-4">A personal portfolio website built with modern web technologies to showcase professional experience, projects, and technical skills.</p>
                
                <h3 class="text-xl font-bold text-lime-400 mb-3">Key Features</h3>
                <ul class="list-disc list-inside space-y-2 mb-4">
                    <li>Responsive design for all device sizes</li>
                    <li>Smooth scroll animations and transitions</li>
                    <li>Interactive project cards with modal details</li>
                    <li>Optimized performance and loading times</li>
                    <li>Modern glassmorphism and gradient effects</li>
                </ul>
                
                <h3 class="text-xl font-bold text-lime-400 mb-3">Technical Implementation</h3>
                <ul class="list-disc list-inside space-y-2 mb-4">
                    <li>React.js with hooks for state management</li>
                    <li>Tailwind CSS for utility-first styling</li>
                    <li>Component-based architecture for maintainability</li>
                </ul>
                
                <h3 class="text-xl font-bold text-lime-400 mb-3">Design Philosophy</h3>
                <p>Focused on creating a clean, professional, and engaging user experience that effectively communicates technical expertise and project accomplishments.</p>
            `
        },
    ];

    const ProjectCard = ({ project, index }) => (
        <div 
            className={`
                group relative bg-neutral-800 rounded-xl shadow-xl overflow-hidden
                transition-all duration-700 hover:shadow-2xl hover:-translate-y-2
                ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-lime-400 group-hover:text-lime-300 transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed text-justify">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                        <span 
                            key={idx}
                            className="px-3 py-1 bg-lime-400/20 text-lime-400 rounded-full text-xs font-semibold
                                     border border-lime-400/30 transition-all hover:bg-lime-400/30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                    {/* GitHub Button - only show if github link exists */}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2
                                     px-5 py-2.5 rounded-full
                                     text-sm font-medium
                                     text-white

                                     bg-white/20 border border-white/30
                                     backdrop-blur-sm
                                     transition-all duration-300

                                     hover:bg-lime-400 hover:border-lime-400
                                     hover:text-black
                                     hover:shadow-lg hover:shadow-lime-400/50
                                     hover:-translate-y-1"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                    )}
                    
                    {/* Learn More Button */}
                    <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 
                                 px-5 py-2.5 rounded-full
                                 text-sm font-medium
                                 text-lime-400 
                                 border border-lime-400/30
                                 transition-all duration-300
                                 hover:bg-lime-400/10 hover:border-lime-400/50
                                 hover:-translate-y-1
                                 hover:shadow-lg hover:shadow-lime-400/20"
                    >
                        Learn More
                        <svg 
                            className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M17 8l4 4m0 0l-4 4m4-4H3" 
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );

    // Modal Component
    const ProjectModal = ({ project, onClose }) => {
        if (!project) return null;

        return (
            <div 
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <div 
                    className="relative bg-neutral-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-lime-400/20 shadow-2xl shadow-lime-400/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="sticky top-4 right-4 float-right z-10
                                 w-10 h-10 rounded-full
                                 bg-neutral-800 border border-white/20
                                 text-white hover:text-lime-400
                                 hover:bg-neutral-700 hover:border-lime-400/50
                                 transition-all duration-300
                                 flex items-center justify-center"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Modal Content */}
                    <div className="p-8">
                        {/* Project Image */}
                        <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-bold text-lime-400 mb-4">
                            {project.title}
                        </h2>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, idx) => (
                                <span 
                                    key={idx}
                                    className="px-3 py-1 bg-lime-200/20 text-lime-100 rounded-full text-xs font-semibold border border-lime-400/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Detailed Description */}
                        <div 
                            className="text-gray-300 text-sm leading-relaxed space-y-4"
                            dangerouslySetInnerHTML={{ __html: project.detailedDescription }}
                        />

                        {/* GitHub Link in Modal */}
                        {project.github && (
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2
                                             px-6 py-3 rounded-full
                                             text-sm font-semibold
                                             bg-gradient-to-r from-lime-400 to-lime-500
                                             text-black
                                             hover:shadow-lg hover:shadow-lime-400/50
                                             transition-all duration-300
                                             hover:-translate-y-0.5"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section 
            id="project" 
            className="w-full min-h-screen flex flex-col items-center justify-start pt-16 pb-16
                       px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white overflow-x-hidden"
        >
            {/* Header Title */}
            <div className={`relative inline-block mb-12 transition-all duration-700 ${
                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
                <p className="font-minecraft text-4xl md:text-5xl tracking-tight">
                    My Projects
                    <div className="flex items-center justify-center mt-4">
                        <span className="h-1 w-20 bg-gradient-to-r from-transparent to-lime-400 rounded-full" />
                        <span className="mx-2 w-3 h-3 bg-lime-400 rounded-full shadow-lg shadow-lime-400/50" />
                        <span className="h-1 w-20 bg-gradient-to-l from-transparent to-lime-400 rounded-full" />
                    </div>
                </p>
            </div>

            {/* PROJECT CARDS CONTAINER - Grid Layout */}
            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            index={index}
                        />
                    ))}
                </div>
            </div>

            {/* Empty State */}
            {projects.length === 0 && (
                <div className="text-center text-gray-500 py-20">
                    <p className="text-xl">No projects yet. Coming soon!</p>
                </div>
            )}

            {/* Modal */}
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
}