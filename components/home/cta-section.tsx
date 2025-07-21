import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CtaSection = () => {
    return (
        <section id="cta" className="w-full py-20 md:py-28">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                        Ready to Elevate Your Content?
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                        Stop wasting time on tedious editing. Start creating videos that capture attention and drive results. Try Reel Caption Pro for free today.
                    </p>
                    <div className="mt-8">
                        <Link href="/upload">
                            <Button size="lg" className="gap-2 group text-lg py-7 px-8">
                                Start Styling for Free
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;