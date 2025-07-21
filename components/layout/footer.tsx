import Link from 'next/link';
import { Film, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Film className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold">ReelCaptionPro</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            AI-powered caption styling to make your videos stand out.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="/#features" className="text-muted-foreground hover:text-primary">Features</Link></li>
                            <li><Link href="/#how-it-works" className="text-muted-foreground hover:text-primary">How It Works</Link></li>
                            <li><Link href="/upload" className="text-muted-foreground hover:text-primary">Get Started</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex items-center gap-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Twitter /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Github /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
                    <p>&copy; {new Date().getFullYear()} Reel Caption Pro. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;