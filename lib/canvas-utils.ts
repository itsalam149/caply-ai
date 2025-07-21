import { Caption } from '@/types/ass-types';

/**
 * Converts ASS color format (&HBBGGRR) to a standard RGBA string.
 * @param assColor The color string from the .ass file.
 * @returns An rgba() string for use in the canvas.
 */
function assColorToRGBA(assColor: string = '&H00FFFFFF'): string {
    if (!assColor.startsWith('&H')) {
        // Default to white if format is unexpected
        return 'rgba(255, 255, 255, 1)';
    }

    // Format is &H[Alpha][Blue][Green][Red]
    const hex = assColor.substring(2);
    const a = 255 - parseInt(hex.substring(0, 2) || '00', 16);
    const b = parseInt(hex.substring(2, 4) || '00', 16);
    const g = parseInt(hex.substring(4, 6) || '00', 16);
    const r = parseInt(hex.substring(6, 8) || '00', 16);

    return `rgba(${r}, ${g}, ${b}, ${a / 255})`;
}

/**
 * Draws the currently active captions onto the canvas context.
 * @param ctx The 2D canvas rendering context.
 * @param captions An array of all caption objects.
 * @param currentTime The video's current playback time in seconds.
 */
export function drawCaptions(ctx: CanvasRenderingContext2D, captions: Caption[], currentTime: number) {
    const activeCaptions = captions.filter(c => currentTime >= c.start && currentTime <= c.end);

    activeCaptions.forEach(caption => {
        const style = caption.style;
        const fontSize = parseInt(style.fontsize || '24', 10);
        const fontName = style.fontname || 'Arial';
        const isBold = style.bold === '-1';

        // Set styles
        ctx.font = `${isBold ? 'bold' : ''} ${fontSize}px ${fontName}`;
        ctx.fillStyle = assColorToRGBA(style.primarycolour);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        // Handle shadow/outline (basic implementation)
        const outlineWidth = parseInt(style.outline || '1', 10);
        if (outlineWidth > 0) {
            ctx.strokeStyle = assColorToRGBA(style.outlinecolour);
            ctx.lineWidth = outlineWidth * 2;
        }

        // Position calculation
        let x = caption.style.position?.x ?? ctx.canvas.width / 2;
        let y = caption.style.position?.y ?? ctx.canvas.height - (fontSize * 1.5);

        const lines = caption.text.split('\\N');
        lines.forEach((line, index) => {
            const lineY = y + (index * fontSize * 1.2); // 1.2 line height
            if (outlineWidth > 0) {
                ctx.strokeText(line, x, lineY);
            }
            ctx.fillText(line, x, lineY);
        });
    });
}


/**
 * Finds which caption is at a specific (x, y) coordinate on the canvas.
 * @param canvas The HTML canvas element.
 * @param captions An array of all caption objects.
 * @param currentTime The video's current playback time in seconds.
 * @param x The x-coordinate of the click/mouse position.
 * @param y The y-coordinate of the click/mouse position.
 * @returns The caption object at the given position, or null if none.
 */
export function getCaptionAtPosition(
    canvas: HTMLCanvasElement,
    captions: Caption[],
    currentTime: number,
    x: number,
    y: number
): Caption | null {
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const activeCaptions = captions.filter(c => currentTime >= c.start && currentTime <= c.end);

    // Iterate backwards to select the top-most caption first
    for (let i = activeCaptions.length - 1; i >= 0; i--) {
        const caption = activeCaptions[i];
        const style = caption.style;
        const fontSize = parseInt(style.fontsize || '24', 10);
        const fontName = style.fontname || 'Arial';
        const isBold = style.bold === '-1';

        ctx.font = `${isBold ? 'bold' : ''} ${fontSize}px ${fontName}`;

        const textMetrics = ctx.measureText(caption.text.split('\\N')[0]); // Measure first line for simplicity
        const width = textMetrics.width;
        const height = fontSize * (caption.text.match(/\\N/g)?.length || 0 + 1) * 1.2;

        const posX = caption.style.position?.x ?? canvas.width / 2;
        const posY = caption.style.position?.y ?? canvas.height - (fontSize * 1.5);

        // Bounding box calculation (approximated)
        const left = posX - width / 2;
        const right = posX + width / 2;
        const top = posY - height;
        const bottom = posY;

        if (x >= left && x <= right && y >= top && y <= bottom) {
            return caption;
        }
    }

    return null;
}