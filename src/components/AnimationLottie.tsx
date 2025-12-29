import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

type Props = {
  animationPath: string | object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function AnimationLottie({
  animationPath,
  loop = true,
  autoplay = true,
  className,
  style,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Clean up previous animation
    if (animRef.current) {
      animRef.current.destroy();
      animRef.current = null;
    }

    const isString = typeof animationPath === "string";

    animRef.current = lottie.loadAnimation({
      container: el,
      renderer: "svg",
      loop,
      autoplay,
      animationData: isString ? undefined : (animationPath as object),
      path: isString ? (animationPath as string) : undefined,
    });

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [animationPath, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
      role="img"
      aria-hidden
    />
  );
}
