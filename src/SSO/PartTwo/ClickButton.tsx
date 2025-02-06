import React from "react";
import { spring, Sequence } from "remotion";
import { FPSFactor } from "../../constants";

interface ClickButtonProps {
  readonly startTime: number;
  readonly duration: number;
  readonly text: string;
  readonly frame: number;
  readonly fps: number;
  readonly totalClicks: number;
  readonly containerStyles?: React.CSSProperties;
  readonly buttonStyles?: React.CSSProperties;
}

export const ClickButton = ({ startTime, duration, text, containerStyles, buttonStyles, frame, fps, totalClicks}: ClickButtonProps) => {
  const delay = 5 * FPSFactor;
  const clickTimes = Array.from({ length: totalClicks }, (_, i) => duration * ((i + 1) / (totalClicks + 1) - 0.1));
  
  const enter = spring({
    fps,
    frame: frame - startTime - delay,
    config: {
      damping: 200,
    },
  });

  const clicks = clickTimes.map((clickTime) => ({
    down: spring({
      fps,
      frame: frame - startTime - delay - clickTime,
      config: {
        damping: 200,
        stiffness: 300,
      },
      durationInFrames: 10 * FPSFactor,
    }),
    up: spring({
      fps,
      frame: frame - startTime - delay - clickTime - (15 * FPSFactor),
      config: {
        damping: 200,
        stiffness: 300,
      },
      durationInFrames: 10 * FPSFactor,
    }),
  }));
  
  const exit = spring({
    fps,
    config: {
      damping: 200,
    },
    durationInFrames: 20 * FPSFactor,
    delay: duration - (40 * FPSFactor),
    frame: frame - startTime - delay,
  });

  const baseScale = enter - exit;
  const clickScale = clicks.reduce((scale, click) => 
    scale * (1 - (click.down * 0.1) + (click.up * 0.1)), 1);
  const finalScale = baseScale * clickScale;
  const totalClickDown = clicks.reduce((total, click) => total + click.down, 0);
  const shadowBlur = 20 - (totalClickDown * 10);
  const brightness = 1 - (totalClickDown * 0.2);

  return (
    <Sequence
      name="Click Button"
      from={startTime + (20 * FPSFactor)}
      durationInFrames={duration}
      style={{
        transform: `scale(${finalScale})`,
        ... containerStyles,
      }}
    >
      <div 
        className="inter-600" 
        style={{
          ...buttonStyles,
          boxShadow: `0 ${shadowBlur}px 30px rgba(0,0,0,0.2)`,
          filter: `brightness(${brightness})`,
          transform: `translateY(${totalClickDown * 2}px)`,
        } as React.CSSProperties}
      >
        {text}
      </div>
    </Sequence>
  );
};


