'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
    { href: '/#features', label: 'Features' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#testimonials', label: 'Testimonials' },
];

interface NavigationProps {
    onLinkClick?: () => void;
}

const Navigation = ({ onLinkClick }: NavigationProps) => {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-lg md:text-base">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={onLinkClick}
                    className={cn(
                        'transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                    )}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;