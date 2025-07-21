'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ExportPanel = () => {
    const handleExport = () => {
        // In a real app, this would trigger the video processing and download.
        // For now, it's a placeholder.
        console.log("Exporting video with new captions...");
        alert("Export functionality is not yet implemented.");
    };

    return (
        <Card className="mt-auto">
            <CardHeader>
                <CardTitle className="text-lg">Export</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                    When you're happy with your captions, export the final video.
                </p>
                <Button onClick={handleExport} className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    Export Video
                </Button>
            </CardContent>
        </Card>
    );
};

export default ExportPanel;