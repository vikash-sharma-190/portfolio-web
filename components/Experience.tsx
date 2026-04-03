"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "PepsiCo",
        role: "SDE - Retail360 & GenAI",
        period: "Dec 2022 – Present",
        description: "Leading development of Retail360 strategic planning tool and pioneering GenAI initiatives.",
        achievements: [
            "Redesigned monolithic Retail360 app into microservices, improving scalability.",
            "Developed Auth, Metrics, and Insights services from scratch.",
            "Built 'Chat with Data' using GenAI for account managers to query sales metrics.",
            "Automated customer call analysis using Speech-to-Text and LLMs.",
            "Created PR Agent to automate code reviews and documentation."
        ],
        tech: ["Java", "Spring Boot", "React", "MongoDB", "Azure", "GenAI", "LangChain"]
    },
    {
        company: "MoveInSync",
        role: "Software Engineer II",
        period: "Jun 2020 – Dec 2022",
        description: "Key contributor to enterprise transport and workspace management solutions.",
        achievements: [
            "Stabilized production services achieving 99.9% uptime.",
            "Built Meeting Room Booking app and Routing Dashboard used by 500+ customers.",
            "Optimized routing algorithms improving operational efficiency by 15%.",
            "Migrated legacy Angular 6 apps to Angular 11 with improved performance."
        ],
        tech: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Kafka", "Docker"]
    }
];

export function Experience() {
    return (
        <section className="py-20 bg-black text-white px-4 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Professional Journey
                    </h2>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500" />
                                    <CardHeader>
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                            <div>
                                                <CardTitle className="text-2xl text-white flex items-center gap-2">
                                                    <Briefcase className="w-5 h-5 text-purple-400" />
                                                    {exp.role}
                                                </CardTitle>
                                                <CardDescription className="text-lg text-white/70 mt-1 font-medium">
                                                    {exp.company}
                                                </CardDescription>
                                            </div>
                                            <Badge variant="outline" className="w-fit text-white/60 border-white/20 flex items-center gap-2">
                                                <Calendar className="w-3 h-3" />
                                                {exp.period}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-white/80 italic">{exp.description}</p>
                                        <ul className="list-disc list-inside space-y-2 text-white/70">
                                            {exp.achievements.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2 pt-4">
                                            {exp.tech.map((t, i) => (
                                                <Badge key={i} variant="secondary" className="bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 border-0">
                                                    {t}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
