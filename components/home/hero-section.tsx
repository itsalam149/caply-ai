'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(120,_113,_249,_0.15)_0%,_rgba(40,_38,_87,_0)_60%)] -z-10"></div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                        Steal Their Style. Caption Your Reels.
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Instantly transfer eye-catching caption styles from any viral video to your own. No design skills needed. Just upload and watch the magic happen.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link href="/upload">
                            <Button size="lg" className="gap-2 group">
                                Get Started for Free
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="gap-2">
                            <PlayCircle className="h-5 w-5" />
                            Watch Demo
                        </Button>
                    </div>
                </motion.div>

                {/* Phone Mockups */}
                <motion.div
                    className="mt-20 relative flex justify-center items-end gap-4 md:gap-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                >
                    {/* Phone 1: Input */}
                    <div className="relative w-[150px] md:w-[200px] -rotate-6">
                        <Image src="/images/hero-phone-1.png" alt="Phone with unstyled video" width={200} height={400} className="rounded-2xl shadow-2xl" />
                    </div>
                    {/* Phone 2: Styled Result */}
                    <div className="relative w-[180px] md:w-[240px] z-10">
                        <Image src="/images/hero-phone-2.png" alt="Phone with styled captions" width={240} height={480} className="rounded-2xl shadow-2xl" />
                    </div>
                    {/* Phone 3: Reference */}
                    <div className="relative w-[150px] md:w-[200px] rotate-6">
                        <Image src="/images/hero-phone-3.png" alt="Phone with reference video" width={200} height={400} className="rounded-2xl shadow-2xl" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;