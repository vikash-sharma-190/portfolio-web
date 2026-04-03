"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4">
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-blue-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-75" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-md mb-6">
                        Available for new opportunities
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Vikash Vishwakarma
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
                        Backend SDE & AI Engineer building scalable enterprise solutions and intelligent agents.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button size="lg" className="rounded-full h-12 px-8 text-base bg-white text-black hover:bg-white/90">
                        View Projects <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base border-white/20 hover:bg-white/10 text-white">
                        Access Resume
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex gap-6 justify-center pt-8"
                >
                    <Link href="https://github.com/vikash-sharma-190" target="_blank" className="text-white/50 hover:text-white transition-colors">
                        <Github className="w-6 h-6" />
                    </Link>
                    <Link href="https://linkedin.com/in/vikashvishwakarma190" target="_blank" className="text-white/50 hover:text-white transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link href="mailto:vikashsharma190@gmail.com" className="text-white/50 hover:text-white transition-colors">
                        <Mail className="w-6 h-6" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
