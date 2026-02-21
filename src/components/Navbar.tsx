"use client";
import { motion } from "motion/react";
import { Github } from "lucide-react";

export default function Navbar() {
    const navItems = [
        { label: "About", href: "#skills" },
        { label: "Tech Stack", href: "#tech" },
        { label: "Work", href: "#work" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-white/3 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="text-xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent"
                            style={{ fontFamily: "var(--font-mono)" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            Anas.dev
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.1 * index,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>

                        {/* GitHub link */}
                        <motion.a
                            href="https://github.com/Anas-Abdul-El"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 group"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            <Github className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                            <span className="hidden sm:inline text-sm">
                                GitHub
                            </span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}