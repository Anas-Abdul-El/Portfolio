'use client';
import { motion } from 'motion/react';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';

const skills = [
    {
        icon: Code2,
        title: 'Frontend Development',
        description: 'Building responsive and performant web applications with React, TypeScript, and modern frameworks.',
        gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Creating beautiful, intuitive interfaces that prioritize user experience and accessibility.',
        gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
        icon: Rocket,
        title: 'Performance',
        description: 'Optimizing load times and runtime performance for seamless user experiences.',
        gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
        icon: Zap,
        title: 'Modern Tools',
        description: 'Leveraging the latest tools and technologies to build cutting-edge solutions.',
        gradient: 'from-green-500/20 to-emerald-500/20',
    },
];

export default function SkillsSection() {
    return (
        <section className="relative py-32 px-6" id="skills">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl font-bold mb-4 bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        What I Do
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Specialized in creating modern web experiences with attention to detail and performance
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="relative h-full p-8 bg-white/2 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/4 transition-all duration-300 overflow-hidden">
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-linear-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

                                <div className="relative z-10">
                                    <div className="inline-flex p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <skill.icon className="h-6 w-6 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-3 text-white">
                                        {skill.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed">
                                        {skill.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
