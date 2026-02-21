"use client";
import { motion } from 'motion/react';
import { Github, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated gradient background blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [-50, 50, -50],
                        y: [-50, 50, -50],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-sm text-gray-400">Available for work</span>
                    </motion.div>
                </motion.div>

                <motion.p
                    className="text-lg md:text-xl text-gray-400 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                >
                    Hi, I'm
                </motion.p>

                <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-4 bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Anas Abdul El
                </motion.h1>

                <motion.h2
                    className="text-3xl md:text-5xl font-semibold mb-6 text-gray-300"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                >
                    Web Developer
                </motion.h2>

                <motion.p
                    className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Crafting exceptional digital experiences with modern web technologies
                </motion.p>

                <motion.div
                    className="flex flex-wrap items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Button
                        size="lg"
                        className="bg-white text-black hover:bg-gray-200 transition-all duration-300 group"
                        asChild
                    >
                        <a href="#contact">
                            Get in touch
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
                        asChild
                    >
                        <a href="#work">View work</a>
                    </Button>
                </motion.div>

                {/* Social links */}
                <motion.div
                    className="flex items-center justify-center gap-6 mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {[
                        { icon: Github, href: 'https://github.com', label: 'GitHub' },
                        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                        { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
                    ].map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
                            whileHover={{ y: -2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        >
                            <social.icon className="h-5 w-5" />
                            <span className="sr-only">{social.label}</span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
                        <motion.div
                            className="w-1.5 h-1.5 bg-white rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}