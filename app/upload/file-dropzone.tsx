'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, Film } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

interface FileDropzoneProps {
    file: File | null;
    setFile: (file: File | null) => void;
}

const FileDropzone = ({ file, setFile }: FileDropzoneProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
        }
    }, [setFile]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'video/mp4': ['.mp4'] },
        multiple: false,
    });

    return (
        <div className="space-y-2">
            <Label htmlFor="video-file" className="text-lg font-semibold">
                Your Video File
            </Label>
            <p className="text-sm text-muted-foreground">
                Upload the MP4 video you want to add the styled captions to.
            </p>
            <div
                {...getRootProps()}
                className={cn(
                    'relative block w-full rounded-lg border-2 border-dashed border-muted-foreground/50 p-12 text-center transition-colors duration-200 ease-in-out hover:border-primary cursor-pointer',
                    { 'border-primary bg-primary/10': isDragActive }
                )}
            >
                <input {...getInputProps()} id="video-file" />
                {file ? (
                    <div className="flex flex-col items-center text-primary">
                        <Film className="h-12 w-12" />
                        <p className="mt-2 font-semibold">{file.name}</p>
                        <p className="text-xs text-muted-foreground">({(file.size / 1024 / 1024).toFixed(2)} MB)</p>
                        <p className="mt-4 text-sm text-muted-foreground">Click or drag to replace</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <UploadCloud className="h-12 w-12 text-muted-foreground" />
                        <p className="mt-4 font-semibold">
                            {isDragActive ? 'Drop the file here!' : 'Drag & drop your MP4 file here'}
                        </p>
                        <p className="text-muted-foreground">or click to browse</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileDropzone;