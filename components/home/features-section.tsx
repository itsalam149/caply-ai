import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, AppWindow, Wand2, ArrowRightLeft } from "lucide-react";

const features = [
    {
        icon: <ArrowRightLeft className="h-8 w-8 text-primary" />,
        title: "Instant Style Transfer",
        description: "Our AI analyzes the caption style from your reference video—font, color, animation—and applies it to yours in one click.",
    },
    {
        icon: <Wand2 className="h-8 w-8 text-primary" />,
        title: "AI-Powered Captioning",
        description: "Don't have captions? We'll automatically transcribe your video's audio with high accuracy before styling.",
    },
    {
        icon: <AppWindow className="h-8 w-8 text-primary" />,
        title: "Intuitive Editor",
        description: "Fine-tune everything. Drag to reposition, adjust timing on the timeline, and edit text directly on the canvas.",
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Lightning-Fast Export",
        description: "Render and download your final, professionally captioned video in seconds, ready to go viral.",
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="w-full py-20 md:py-28 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Everything You Need, Nothing You Don't
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Reel Caption Pro is packed with powerful features to make your content stand out effortlessly.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <Card key={feature.title} className="text-center bg-background border-border/50 hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="mx-auto bg-secondary rounded-full p-3 w-fit">
                                    {feature.icon}
                                </div>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;