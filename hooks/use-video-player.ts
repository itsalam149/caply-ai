'use client';

import { useState, useEffect, useCallback, RefObject } from 'react';

interface PlayerState {
    isPlaying: boolean;
    progress: number;
    currentTime: number;
    duration: number;
}

export const useVideoPlayer = (videoRef: RefObject<HTMLVideoElement>) => {
    const [playerState, setPlayerState] = useState<PlayerState>({
        isPlaying: false,
        progress: 0,
        currentTime: 0,
        duration: 0,
    });

    const togglePlay = useCallback(() => {
        setPlayerState((prevState) => ({ ...prevState, isPlaying: !prevState.isPlaying }));
    }, []);

    const handleTimeUpdate = useCallback(() => {
        if (videoRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setPlayerState((prevState) => ({
                ...prevState,
                progress,
                currentTime: videoRef.current?.currentTime || 0,
            }));
        }
    }, [videoRef]);

    const handleLoadedData = useCallback(() => {
        if (videoRef.current) {
            setPlayerState((prevState) => ({
                ...prevState,
                duration: videoRef.current?.duration || 0,
            }));
        }
    }, [videoRef]);

    const seek = useCallback((time: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            handleTimeUpdate(); // Immediately update state after seeking
        }
    }, [videoRef, handleTimeUpdate]);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        playerState.isPlaying ? videoElement.play() : videoElement.pause();
    }, [playerState.isPlaying, videoRef]);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        videoElement.addEventListener("timeupdate", handleTimeUpdate);
        videoElement.addEventListener("loadeddata", handleLoadedData);

        return () => {
            videoElement.removeEventListener("timeupdate", handleTimeUpdate);
            videoElement.removeEventListener("loadeddata", handleLoadedData);
        };
    }, [handleTimeUpdate, handleLoadedData, videoRef]);

    return { playerState, togglePlay, handleTimeUpdate, seek };
};