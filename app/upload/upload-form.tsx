'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UrlInput from './url-input';
import FileDropzone from './file-dropzone';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';

const UploadForm = () => {
    const [referenceUrl, setReferenceUrl] = useState('');
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!referenceUrl || !videoFile) {
            setError('Please provide both a reference URL and a video file.');
            return;
        }

        // Create a temporary URL for the video file to pass to the editor
        const videoObjectUrl = URL.createObjectURL(videoFile);

        // Navigate to the editor page with the video URL as a query param
        // In a real app, you would first upload to a backend/storage
        router.push(`/editor?video=${encodeURIComponent(videoObjectUrl)}`);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <UrlInput url={referenceUrl} setUrl={setReferenceUrl} />
            <FileDropzone file={videoFile} setFile={setVideoFile} />

            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="text-center pt-4">
                <Button
                    type="submit"
                    size="lg"
                    className="gap-2 w-full max-w-xs text-lg py-7"
                    disabled={!referenceUrl || !videoFile}
                >
                    <Wand2 className="h-5 w-5" />
                    Generate Captions
                </Button>
            </div>
        </form>
    );
};

export default UploadForm;