"use client"
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from './ui/button';

export default function ContactSection() {
    return (
        <section className="relative py-32 px-6" id="contact">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background blur effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-50" />

                    <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
                        <motion.h2
                            className="text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Let's Work Together
                        </motion.h2>

                        <motion.p
                            className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Have a project in mind? Let's create something amazing together.
                            I'm always open to discussing new opportunities and collaborations.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Button
                                size="lg"
                                className="bg-white text-black hover:bg-gray-200 transition-all duration-300 mb-12"
                                asChild
                            >
                                <a href="mailto:hello@example.com">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Get in touch
                                </a>
                            </Button>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            className="flex items-center justify-center gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {[
                                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                            ].map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
                                    whileHover={{ y: -2 }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                >
                                    <social.icon className="h-5 w-5" />
                                    <span className="sr-only">{social.label}</span>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
