"use client"
import { motion } from 'motion/react';

export default function Footer() {
    return (
        <footer className="relative py-12 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-gray-400 mb-2">
                        Built by Anas Abdul El
                    </p>
                    <p className="text-gray-500 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                        © 2026 All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
