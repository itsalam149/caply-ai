import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
    className?: string;
    size?: number;
}

const LoadingSpinner = ({ className, size = 48 }: LoadingSpinnerProps) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <LoaderCircle
                className="animate-spin text-primary"
                style={{ width: size, height: size }}
            />
        </div>
    );
};

export default LoadingSpinner;