'use client';

import { Caption } from '@/types/ass-types';
import { useMemo } from 'react';

interface TimelineProps {
    captions: Caption[];
    duration: number;
    currentTime: number;
    onTimeUpdate: (time: number) => void;
    onCaptionSelect: (id: string) => void;
    onCaptionTimeChange: (caption: Caption) => void; // Simplified for now
}

const Timeline = ({ captions, duration, currentTime, onTimeUpdate, onCaptionSelect }: TimelineProps) => {
    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = clickX / rect.width;
        onTimeUpdate(duration * percentage);
    };

    const captionElements = useMemo(() => {
        if (duration === 0) return null;
        return captions.map((caption) => {
            const left = (caption.start / duration) * 100;
            const width = ((caption.end - caption.start) / duration) * 100;
            return (
                <div
                    key={caption.id}
                    className="absolute h-full bg-primary/50 hover:bg-primary/80 border-x-2 border-primary rounded-sm cursor-pointer"
                    style={{ left: `${left}%`, width: `${width}%` }}
                    onClick={() => onCaptionSelect(caption.id)}
                    title={`${caption.text} (${caption.start.toFixed(2)}s - ${caption.end.toFixed(2)}s)`}
                >
                    <p className="text-xs truncate px-1 text-primary-foreground">{caption.text}</p>
                </div>
            );
        });
    }, [captions, duration, onCaptionSelect]);

    const playheadPosition = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div className="h-24 bg-secondary rounded-lg p-2 flex flex-col gap-2">
            <div className="text-xs text-muted-foreground flex justify-between">
                <span>{new Date(currentTime * 1000).toISOString().substr(14, 5)}</span>
                <span>{new Date(duration * 1000).toISOString().substr(14, 5)}</span>
            </div>
            <div
                className="relative w-full h-12 bg-muted rounded-md cursor-pointer"
                onClick={handleSeek}
            >
                {/* Caption Blocks */}
                {captionElements}

                {/* Playhead */}
                <div
                    className="absolute top-0 h-full w-0.5 bg-red-500 pointer-events-none"
                    style={{ left: `${playheadPosition}%` }}
                >
                    <div className="absolute -top-1.5 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;