import { NextResponse } from 'next/server';
import { parseASS } from '@/lib/ass-parser'; // Assuming a server-side parser function

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        const text = await file.text();
        const parsedData = parseASS(text); // Use the server-side parser

        return NextResponse.json(parsedData);
    } catch (error) {
        console.error('ASS parsing error:', error);
        return NextResponse.json({ error: 'Failed to parse file' }, { status: 500 });
    }
}