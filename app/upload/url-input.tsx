'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link2 } from "lucide-react";

interface UrlInputProps {
    url: string;
    setUrl: (url: string) => void;
}

const UrlInput = ({ url, setUrl }: UrlInputProps) => {
    return (
        <div className="space-y-2">
            <Label htmlFor="reference-url" className="text-lg font-semibold">
                Reference Reel URL
            </Label>
            <p className="text-sm text-muted-foreground">
                Paste the link to a video with the caption style you want to copy.
            </p>
            <div className="relative">
                <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    id="reference-url"
                    type="url"
                    placeholder="https://www.instagram.com/reels/..."
                    className="pl-10 h-12"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </div>
        </div>
    );
};
// You'll need a Label component. Here's a basic one for your ui folder:
// components/ui/label.tsx
/*
'use client';
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName
export { Label }
*/


export default UrlInput;