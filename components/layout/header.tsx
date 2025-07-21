'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Navigation from './navigation';
import { Menu, X, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <Film className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold">ReelCaptionPro</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <Navigation />
                            <Link href="/upload">
                                <Button>Get Started</Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <Button onClick={toggleMenu} variant="ghost" size="icon">
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-background z-40 flex flex-col items-center justify-center gap-8"
                    >
                        <Navigation onLinkClick={() => setIsOpen(false)} />
                        <Link href="/upload">
                            <Button onClick={() => setIsOpen(false)} size="lg">Get Started</Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;