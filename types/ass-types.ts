export interface Style {
    name: string;
    fontname: string;
    fontsize: string;
    primarycolour: string;
    secondarycolour: string;
    outlinecolour: string;
    backcolour: string;
    bold: string;
    italic: string;
    underline: string;
    strikeout: string;
    scalex: string;
    scaley: '100';
    spacing: string;
    angle: string;
    borderstyle: string;
    outline: string;
    shadow: string;
    alignment: string;
    marginl: string;
    marginr: string;
    marginv: string;
    encoding: string;
    // Custom property for canvas rendering
    position?: { x: number, y: number };
}

export interface Caption {
    id: string;
    layer: number;
    start: number;
    end: number;
    styleName: string;
    style: Partial<Style>;
    text: string;
}

export interface AssData {
    styles: Record<string, Style>;
    events: Caption[];
}