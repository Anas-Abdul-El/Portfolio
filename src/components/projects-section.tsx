'use client';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
    {
        title: 'Portfolio',
        description: ' The one you at ',
        image: './img/Screenshot 2026-02-22 143609.png',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Shadcn/UI', "motion"],
        github: 'https://github.com/Anas-Abdul-El/Portfolio',
        demo: 'https://anas-abdul-el.vercel.app/',
    },
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform for selling shoes with real-time inventory management and seamless checkout experience.',
        image: './img/Screenshot 2026-02-22 141736.png',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Shadcn/UI', "prisma", "postgres", "authjs"],
        github: 'https://github.com/Anas-Abdul-El/Shoes-App-',
        demo: 'https://shoes-app-amber.vercel.app/',
    },
    {
        title: 'Gym saas platform',
        description: 'A full-featured gym saas platform for managing gyms and clients with real-time inventory management and seamless checkout experience.',
        tags: ['Next.js', 'Charts', 'OpenAI', 'Shadcn/UI', "prisma", "postgres"],
        image: './img/Screenshot 2026-02-22 141749.png',
        github: 'https://github.com/Anas-Abdul-El/gym-SAAS',
        demo: 'https://gym-saas-ebon.vercel.app/',
    },
    {
        title: 'Landing page',
        description: 'a landing page for a company that creates websites for businesses.',
        image: './img/Screenshot 2026-02-22 141717.png',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Shadcn/UI', "prisma", "postgres", "motion", "authjs"],
        github: 'https://github.com/Anas-Abdul-El/ans-media',
        demo: 'https://ans-media.vercel.app/',
    },
    {
        title: 'Notes App',
        description: 'Notic is a simple and responsive Notes Web App built with Next.js',
        image: './img/Screenshot 2026-02-22 143045.png',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', "prisma", "postgres", "motion"],
        github: 'https://github.com/Anas-Abdul-El/Notic',
        demo: 'https://notic-chi.vercel.app/',
    },
];

export default function ProjectsSection() {
    return (
        <section className="relative py-32 px-6" id="work">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl font-bold mb-4 bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Featured Work
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A selection of projects that showcase my skills and passion for web development
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="relative h-full bg-white/2 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-3 text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300"
                                                style={{ fontFamily: 'var(--font-mono)' }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="flex-1 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group/btn"
                                            asChild
                                        >
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="h-4 w-4 mr-2" />
                                                Code
                                            </a>
                                        </Button>

                                        <Button
                                            size="sm"
                                            className="flex-1 bg-white text-black hover:bg-gray-200 transition-all duration-300 group/btn"
                                            asChild
                                        >
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Demo
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
