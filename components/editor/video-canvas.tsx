'use client';

import { useRef, useEffect, useState } from 'react';
import { useCanvas } from '@/hooks/use-canvas';
import { Caption } from '@/types/ass-types';
import { drawCaptions, getCaptionAtPosition } from '@/lib/canvas-utils';

interface VideoCanvasProps {
    videoElement: HTMLVideoElement | null;
    captions: Caption[];
    currentTime: number;
    onCaptionSelect: (id: string | null) => void;
    onCaptionUpdate: (caption: Caption) => void;
}

const VideoCanvas = ({ videoElement, captions, currentTime, onCaptionSelect, onCaptionUpdate }: VideoCanvasProps) => {
    const canvasRef = useCanvas(videoElement);
    const [draggingCaption, setDraggingCaption] = useState<Caption | null>(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    // Main render loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !videoElement) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const render = () => {
            // Clear canvas and draw video frame
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

            // Draw captions for the current time
            drawCaptions(ctx, captions, currentTime);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [canvasRef, videoElement, captions, currentTime]);

    // Mouse handlers for dragging captions
    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const clickedCaption = getCaptionAtPosition(canvas, captions, currentTime, x, y);
        if (clickedCaption) {
            onCaptionSelect(clickedCaption.id);
            setDraggingCaption(clickedCaption);
            setDragOffset({
                x: x - (clickedCaption.style.position?.x || 0),
                y: y - (clickedCaption.style.position?.y || 0),
            });
            canvas.style.cursor = 'grabbing';
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (draggingCaption) {
            const newX = x - dragOffset.x;
            const newY = y - dragOffset.y;
            const updatedCaption = {
                ...draggingCaption,
                style: { ...draggingCaption.style, position: { x: newX, y: newY } },
            };
            onCaptionUpdate(updatedCaption);
        } else {
            const hoveredCaption = getCaptionAtPosition(canvas, captions, currentTime, x, y);
            canvas.style.cursor = hoveredCaption ? 'grab' : 'default';
        }
    };

    const handleMouseUp = () => {
        setDraggingCaption(null);
        if (canvasRef.current) canvasRef.current.style.cursor = 'default';
    };

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        />
    );
};

export default VideoCanvas;