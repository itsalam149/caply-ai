'use client';

import UploadForm from "@/app/upload/upload-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function UploadPage() {
    return (
        <div className="container mx-auto max-w-4xl py-12 px-4">
            <Card className="border-2 border-dashed border-primary/20 bg-secondary/30 shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold tracking-tight">
                        Upload Your Video
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                        Provide a reference and your video to start the magic.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <UploadForm />
                </CardContent>
            </Card>
        </div>
    );
}