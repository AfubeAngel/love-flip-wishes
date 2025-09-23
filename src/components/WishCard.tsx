import { useState } from "react";
import { cn } from "@/lib/utils";

interface WishCardProps {
  sender: string;
  message: string;
  delay?: number;
}

export const WishCard = ({ sender, message, delay = 0 }: WishCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 w-full max-w-sm mx-auto animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={cn(
          "relative w-full h-80 transition-transform duration-700 preserve-3d cursor-pointer",
          isFlipped && "rotate-y-180"
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl bg-gradient-romantic shadow-card border border-rose-gold/20 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">💌</span>
            </div>
            <h3 className="text-xl font-serif text-white mb-2">Wedding Wishes</h3>
            <p className="text-primary-foreground/90 font-medium">From {sender}</p>
            <p className="text-sm text-primary-foreground/70 mt-4">Click to read</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl bg-ivory shadow-card border border-dusty-rose/20 p-6 flex flex-col justify-center">
          <div className="text-center">
            <p className="text-foreground/80 leading-relaxed mb-4 text-sm">{message}</p>
            <div className="w-12 h-px bg-dusty-rose mx-auto mb-3"></div>
            <p className="text-dusty-rose font-medium text-sm">— {sender}</p>
            <p className="text-xs text-muted-foreground mt-4">Click to flip back</p>
          </div>
        </div>
      </div>
    </div>
  );
};