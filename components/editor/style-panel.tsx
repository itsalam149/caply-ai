'use client';

import { Caption } from "@/types/ass-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface StylePanelProps {
    caption: Caption;
    onUpdate: (updatedCaption: Caption) => void;
}

const StylePanel = ({ caption, onUpdate }: StylePanelProps) => {
    const handleSizeChange = (value: number[]) => {
        const newSize = value[0];
        onUpdate({
            ...caption,
            style: {
                ...caption.style,
                fontsize: newSize.toString(),
            },
        });
    };

    const currentSize = parseInt(caption.style.fontsize || '24', 10);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Styling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Font Size */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label htmlFor="font-size" className="text-sm font-medium">Font Size</label>
                        <span className="text-sm text-muted-foreground">{currentSize}px</span>
                    </div>
                    <Slider
                        id="font-size"
                        min={10}
                        max={100}
                        step={1}
                        value={[currentSize]}
                        onValueChange={handleSizeChange}
                    />
                </div>
                {/* Add more style controls here (color, font, etc.) */}
            </CardContent>
        </Card>
    );
};

export default StylePanel;