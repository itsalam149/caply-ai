import { UploadCloud, Edit, Download } from 'lucide-react';

const steps = [
    {
        icon: <UploadCloud className="h-10 w-10" />,
        title: "Step 1: Upload",
        description: "Provide a link to the reference reel with the style you love, and upload your own video file.",
    },
    {
        icon: <Edit className="h-10 w-10" />,
        title: "Step 2: Style & Edit",
        description: "Watch as the style is instantly applied. Fine-tune text, timing, and position in our simple editor.",
    },
    {
        icon: <Download className="h-10 w-10" />,
        title: "Step 3: Export",
        description: "Download your newly captioned video, perfectly styled and ready to be shared with the world.",
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="w-full py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Get Stunning Captions in 30 Seconds
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Creating viral-worthy content has never been this simple.
                    </p>
                </div>

                <div className="relative mt-20 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
                    {/* Dotted line for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-border -translate-y-1/2 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center max-w-xs">
                            <div className="bg-secondary p-6 rounded-full border-2 border-primary/20 text-primary">
                                {step.icon}
                            </div>
                            <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
                            <p className="mt-2 text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;