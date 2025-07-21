import { useState, useCallback } from 'react';
import { parseASS } from '@/lib/ass-parser';
import { AssData } from '@/types/ass-types';

export const useAssParser = () => {
    const [parsedData, setParsedData] = useState<AssData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const parseFile = useCallback((fileContent: string) => {
        setLoading(true);
        setError(null);
        try {
            // Using a timeout to simulate async operation if needed
            setTimeout(() => {
                const data = parseASS(fileContent);
                setParsedData(data);
                setLoading(false);
            }, 100);
        } catch (e) {
            setError('Failed to parse ASS file.');
            setLoading(false);
            console.error(e);
        }
    }, []);

    return { parsedData, loading, error, parseFile };
};