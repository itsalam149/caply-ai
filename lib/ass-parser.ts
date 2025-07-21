import { AssData, Caption, Style } from '@/types/ass-types';

export function parseASS(assText: string): AssData {
    const lines = assText.split(/\r?\n/);
    const styles: Record<string, Style> = {};
    const events: Caption[] = [];
    let currentSection = '';
    let styleFormat: string[] = [];
    let eventFormat: string[] = [];

    lines.forEach((line, index) => {
        line = line.trim();
        if (line.startsWith('[')) {
            currentSection = line;
            return;
        }
        if (!line || line.startsWith(';')) return;

        if (currentSection === '[V4+ Styles]') {
            const [key, value] = line.split(': ');
            if (key === 'Format') {
                styleFormat = value.split(',').map(s => s.trim());
            } else if (key === 'Style' && styleFormat.length > 0) {
                const values = value.split(',');
                const style: Partial<Style> = {};
                styleFormat.forEach((formatKey, i) => {
                    (style as any)[formatKey.toLowerCase()] = values[i];
                });
                styles[style.name!] = style as Style;
            }
        } else if (currentSection === '[Events]') {
            const [key, value] = line.split(': ');
            if (key === 'Format') {
                eventFormat = value.split(',').map(s => s.trim());
            } else if (key === 'Dialogue' && eventFormat.length > 0) {
                const values = value.split(/,(.*)/s); // Split only on the first comma
                const dialogueParts = value.split(',');
                const event: any = {};
                eventFormat.forEach((formatKey, i) => {
                    // Re-join the text part which might contain commas
                    if (formatKey.toLowerCase() === 'text') {
                        event[formatKey.toLowerCase()] = dialogueParts.slice(i).join(',');
                    } else {
                        event[formatKey.toLowerCase()] = dialogueParts[i];
                    }
                });

                const styleName = event.style;
                const textContent = event.text.replace(/\\N/g, '\n').replace(/{[^}]+}/g, ''); // Basic tag stripping

                events.push({
                    id: `caption-${index}`,
                    layer: parseInt(event.layer, 10),
                    start: timeToSeconds(event.start),
                    end: timeToSeconds(event.end),
                    styleName: styleName,
                    style: styles[styleName] || {}, // Get the full style object
                    text: textContent,
                });
            }
        }
    });

    return { styles, events };
}

function timeToSeconds(timeStr: string): number {
    const [h, m, s] = timeStr.split(':');
    const [sec, cs] = s.split('.');
    return parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(sec) + parseInt(cs) / 100;
}