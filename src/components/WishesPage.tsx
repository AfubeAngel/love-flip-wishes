import { WishCard } from "@/components/WishCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import wishesData from "@/data/wishes.json";
import cardsBg from "@/assets/cards-bg.jpg";

export const WishesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cardsBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-8 px-4">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-4 text-foreground/80 hover:text-foreground hover:bg-white/20 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-2">
            Wedding Wishes
          </h1>
          <p className="text-center text-foreground/80 max-w-md mx-auto">
            Click on each card to read the heartfelt messages from your loved ones
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {wishesData.map((wish, index) => (
            <WishCard
              key={wish.id}
              sender={wish.sender}
              message={wish.message}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-8">
          <p className="text-foreground/70">
            Wishing you a happy married life
          </p>
        </footer>
      </div>
    </div>
  );
};