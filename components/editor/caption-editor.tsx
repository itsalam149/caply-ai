'use client';

import { Caption } from "@/types/ass-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface CaptionEditorProps {
    caption: Caption;
    onUpdate: (updatedCaption: Caption) => void;
}

const CaptionEditor = ({ caption, onUpdate }: CaptionEditorProps) => {
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onUpdate({ ...caption, text: e.target.value });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Caption Text</CardTitle>
            </CardHeader>
            <CardContent>
                <Textarea
                    value={caption.text}
                    onChange={handleTextChange}
                    rows={4}
                    placeholder="Enter caption text..."
                />
            </CardContent>
        </Card>
    );
};

export default CaptionEditor;