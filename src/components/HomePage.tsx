import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
            Wedding Wishes
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-md mx-auto">
            A collection of love, joy, and well wishes for your special day
          </p>
          <Button
            onClick={() => navigate("/wishes")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg font-medium shadow-romantic hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            View Our Wishes 💕
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 p-6">
        <p className="text-center text-foreground/70 text-sm">
          Wishing you a happy married life
        </p>
      </footer>
    </div>
  );
};