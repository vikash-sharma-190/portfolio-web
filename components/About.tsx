"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
    "Java", "Spring Boot", "Microservices", "Python", "GenAI", "LangChain",
    "React", "Next.js", "MongoDB", "PostgreSQL", "Kafka", "Docker",
    "Kubernetes", "Azure", "AWS", "System Design"
];

export function About() {
    return (
        <section className="py-20 bg-black text-white px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                            <p>
                                I am a passionate **Software Engineer** with over 5 years of experience in building scalable backend systems,
                                enterprise solutions, and AI-driven applications. Currently at **PepsiCo**, I lead development for
                                critical strategic planning tools and drive GenAI adoption across the organization.
                            </p>
                            <p>
                                My journey started at **MoveInSync**, where I optimized routing algorithms and built employee-facing apps
                                during the challenging times of the pandemic. I thrive on complex problem-solving, from dismantling monoliths
                                into microservices to architecting autonomous AI agents.
                            </p>
                            <p>
                                I believe in the power of technology to transform businesses and improve lives. Whether it’s optimizing
                                supply chains or automating mundane tasks with LLMs, I’m always learning and building.
                            </p>
                        </div>

                        <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4 text-white">Technical Arsenal</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="bg-white/10 hover:bg-white/20 text-white border-0 px-3 py-1"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
