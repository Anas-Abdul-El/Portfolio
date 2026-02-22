'use client';
import { motion } from 'motion/react';
import { Layers, Server, Shield, Rocket } from 'lucide-react';

const techStack = [
    {
        category: 'Frontend',
        icon: Layers,
        gradient: 'from-blue-500/20 to-cyan-500/20',
        technologies: [
            'Next.js',
            'React',
            'TypeScript',
            'TailwindCSS',
            'shadcn/ui',
            'Animation Libraries',
        ],
    },
    {
        category: 'Backend',
        icon: Server,
        gradient: 'from-purple-500/20 to-pink-500/20',
        technologies: [
            'Next.js Server Actions',
            'API Routes',
            'Prisma ORM',
            'PostgreSQL (Neon)',
        ],
    },
    {
        category: 'Authentication & Security',
        icon: Shield,
        gradient: 'from-green-500/20 to-emerald-500/20',
        technologies: [
            'Auth.js',
            'bcrypt',
            'Zod Validation',
        ],
    },
    {
        category: 'Deployment & Tools',
        icon: Rocket,
        gradient: 'from-orange-500/20 to-red-500/20',
        technologies: [
            'Vercel',
            'Git',
            'GitHub',
        ],
    },
];

export default function TechStackSection() {
    return (
        <section className="relative py-32 px-6" id="tech">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl font-bold mb-4 bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Tech Stack
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Modern technologies and tools I use to build powerful web applications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {techStack.map((stack, index) => (
                        <motion.div
                            key={stack.category}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="relative h-full p-8 bg-white/2 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/4 transition-all duration-300 overflow-hidden">
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-linear-to-br ${stack.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

                                <div className="relative z-10">
                                    {/* Icon and title */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="shrink-0 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                            <stack.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-white">
                                            {stack.category}
                                        </h3>
                                    </div>

                                    {/* Technologies grid */}
                                    <div className="flex flex-wrap gap-2">
                                        {stack.technologies.map((tech, techIndex) => (
                                            <motion.div
                                                key={tech}
                                                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: index * 0.1 + techIndex * 0.05
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <span className="text-sm text-gray-300" style={{ fontFamily: 'var(--font-mono)' }}>
                                                    {tech}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional info */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-gray-500 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                        Always learning and exploring new technologies
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
