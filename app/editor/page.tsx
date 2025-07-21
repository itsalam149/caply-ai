'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import VideoCanvas from '@/components/editor/video-canvas';
import Timeline from '@/components/editor/timeline';
import CaptionEditor from '@/components/editor/caption-editor';
import StylePanel from '@/components/editor/style-panel';
import ExportPanel from '@/components/editor/export-panel';
import LoadingSpinner from '@/components/common/loading-spinner';
import { useVideoPlayer } from '@/hooks/use-video-player';
import { useAssParser } from '@/hooks/use-ass-parser';
import { Caption } from '@/types/ass-types';

export default function EditorPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const videoUrl = searchParams.get('video');

    const videoRef = useRef<HTMLVideoElement>(null);
    const [captions, setCaptions] = useState<Caption[]>([]);
    const [selectedCaptionId, setSelectedCaptionId] = useState<string | null>(null);

    const { playerState, togglePlay, handleTimeUpdate, seek } = useVideoPlayer(videoRef);
    const { parsedData, loading, error, parseFile } = useAssParser();

    // On mount, load sample data for demonstration
    useEffect(() => {
        if (!videoUrl) {
            // In a real app, you might redirect or show an error
            console.warn("No video URL provided. This is a demo.");
        }
        // Fetch and parse a sample ASS file for demonstration
        fetch('/sample-assets/sample.ass')
            .then(res => res.text())
            .then(text => parseFile(text));
    }, [videoUrl, parseFile]);

    useEffect(() => {
        if (parsedData) {
            setCaptions(parsedData.events);
        }
    }, [parsedData]);

    if (loading) return <div className="flex h-screen items-center justify-center"><LoadingSpinner /></div>;
    if (error) return <div className="flex h-screen items-center justify-center text-red-500">{error}</div>;

    const selectedCaption = captions.find(c => c.id === selectedCaptionId);

    const handleCaptionUpdate = (updatedCaption: Caption) => {
        setCaptions(prev => prev.map(c => c.id === updatedCaption.id ? updatedCaption : c));
    };

    return (
        <div className="flex h-[calc(100vh-80px)] w-full flex-col lg:flex-row bg-background text-foreground">
            {/* Hidden video element to control playback */}
            <video ref={videoRef} src={videoUrl || '/sample-assets/sample-video.mp4'} onTimeUpdate={handleTimeUpdate} className="hidden" />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col p-4 gap-4 overflow-hidden">
                <div className="flex-1 relative bg-black rounded-lg">
                    <VideoCanvas
                        videoElement={videoRef.current}
                        captions={captions}
                        currentTime={playerState.currentTime}
                        onCaptionSelect={setSelectedCaptionId}
                        onCaptionUpdate={handleCaptionUpdate}
                    />
                </div>
                <Timeline
                    captions={captions}
                    duration={playerState.duration}
                    currentTime={playerState.currentTime}
                    onTimeUpdate={seek}
                    onCaptionSelect={setSelectedCaptionId}
                    onCaptionTimeChange={handleCaptionUpdate}
                />
            </div>

            {/* Side Panel */}
            <div className="w-full lg:w-80 xl:w-96 bg-secondary border-l border-border p-4 flex flex-col gap-4 overflow-y-auto">
                <h2 className="text-xl font-bold">Editor Controls</h2>
                {selectedCaption ? (
                    <>
                        <CaptionEditor caption={selectedCaption} onUpdate={handleCaptionUpdate} />
                        <StylePanel caption={selectedCaption} onUpdate={handleCaptionUpdate} />
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                        Select a caption on the timeline or canvas to edit.
                    </div>
                )}
                <ExportPanel />
            </div>
        </div>
    );
}