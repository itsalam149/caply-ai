import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
    {
        quote: "This is a game-changer. I used to spend hours trying to replicate caption styles. Reel Caption Pro does it in seconds. My engagement has skyrocketed!",
        name: "Sarah L.",
        title: "Content Creator",
        avatar: "/images/avatar-1.png", // Placeholder path
    },
    {
        quote: "As a social media manager, this tool is my secret weapon. It saves me and my clients so much time and money. The results look incredibly professional.",
        name: "Mike R.",
        title: "Social Media Manager",
        avatar: "/images/avatar-2.png", // Placeholder path
    },
    {
        quote: "I'm not a video editor, but Reel Caption Pro makes me look like one. The UI is so simple and the final product is always top-notch. Highly recommended!",
        name: "Jessica P.",
        title: "Small Business Owner",
        avatar: "/images/avatar-3.png", // Placeholder path
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="w-full py-20 md:py-28 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Loved by Creators and Brands
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Don't just take our word for it. Here's what people are saying.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="bg-background flex flex-col">
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <p className="text-muted-foreground flex-grow">"{testimonial.quote}"</p>
                                <div className="mt-6 flex items-center gap-4">
                                    {/* <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  /> */}
                                    <div className="w-12 h-12 rounded-full bg-primary/20"></div> {/* Placeholder */}
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;