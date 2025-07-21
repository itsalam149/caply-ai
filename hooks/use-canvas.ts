'use client';

import { useRef, useEffect, RefObject } from 'react';

export const useCanvas = (videoElement: HTMLVideoElement | null): RefObject<HTMLCanvasElement> => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !videoElement) return;

        const setCanvasDimensions = () => {
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
        };

        // Set dimensions when video metadata is loaded
        videoElement.addEventListener('loadedmetadata', setCanvasDimensions);

        // Also set dimensions if the video is already loaded
        if (videoElement.videoWidth > 0) {
            setCanvasDimensions();
        }

        return () => {
            videoElement.removeEventListener('loadedmetadata', setCanvasDimensions);
        };
    }, [videoElement]);

    return canvasRef;
};