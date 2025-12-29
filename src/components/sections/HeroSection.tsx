import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointer2 } from "lucide-react";
import AnimationLottie from "@/components/AnimationLottie";
import portfolio from "@/assets/lottie/portfolio3.json";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 animate-gradient" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl floating opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl floating-slow opacity-40" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/20 rounded-full blur-2xl pulse-glow" />

      <div className="container mx-auto px-6 py-20 pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Status badge */}
            <div className="hidden md:inline-flex opacity-0 animate-slide-up items-center gap-2 glass rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for opportunities
              </span>
            </div>

            <h1 className="opacity-0 animate-slide-up animation-delay-100">
              <span className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[1.1] block">
                Sampath
              </span>
              <span className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] block mt-2">
                <span className="gradient-text">Kumar Domakonda</span>
              </span>
            </h1>

            <p className="opacity-0 animate-slide-up animation-delay-200 text-xl md:text-2xl text-muted-foreground mt-8 max-w-xl leading-relaxed font-light">
              Full Stack Developer crafting{" "}
              <span className="text-foreground font-medium">scalable</span> &{" "}
              <span className="text-foreground font-medium">modern</span> web
              experiences with 4+ years of expertise.
            </p>

            <div className="opacity-0 animate-slide-up animation-delay-300 flex flex-wrap gap-4 mt-10">
              <Button
                variant="hero"
                size="lg"
                asChild
                className="rounded-full group"
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                asChild
                className="rounded-full"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="opacity-0 animate-slide-up animation-delay-400 flex gap-8 mt-16">
              {[
                { value: "4+", label: "Years Exp." },
                { value: "15+", label: "Projects" },
                { value: "10+", label: "Technologies" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-display font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Animation Placeholder (Lottie) */}
          <div className="hidden md:flex order-1 lg:order-2 justify-center lg:justify-end">
            <div className="opacity-0 animate-fade-in animation-delay-200">
              <div
                className="w-full max-w-[460px] md:max-w-[640px] lg:max-w-[760px] 2xl:max-w-[880px] h-[280px] md:h-[340px] lg:h-[420px] 2xl:h-[480px]"
                aria-hidden="true"
              >
                <AnimationLottie
                  animationPath={portfolio}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <MousePointer2 size={20} className="animate-bounce" />
            <span className="text-xs uppercase tracking-widest">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
};
