import { spring } from "remotion";

interface TransformStyleProps {
    translate: { x: number; y: number, startTime?: number },
    frame: number;
    fps: number;
    startTime: number;
    delay: number;
    duration: number;
    spinIcons?: boolean | boolean[];
}

export const getTransformStyles = ({ translate, frame, fps, startTime, delay, duration, spinIcons }: TransformStyleProps) =>{
    const enter = spring({
      fps,
      frame: frame - startTime - delay,
      config: {
        damping: 200,
      },
    });

    const exit = spring({
      fps,
      config: {
        damping: 200,
      },
      durationInFrames: 20,
      delay: duration - 20,
      frame: frame - startTime - delay,
    });

    const scale = enter - exit;

    let translateValue;
    if (translate) {
      const translateDelay = translate.startTime || 20;
      translateValue = spring({
        frame: frame - startTime - delay - translateDelay,
        fps,
        config: {
          damping: 10, // Controls bounciness
          mass: 0.5, // Controls inertia
          stiffness: 50, // Controls spring tension
        },
        from: 0,
        to: 2,
      });
    }

    let transformStyle = `scale(${scale})`;
    
    if(translateValue && translate){
      transformStyle = `translateX(${translateValue * translate.x}px) translateY(${translateValue * translate.y}px) ${transformStyle}`
    }

    if(spinIcons && (!Array.isArray(spinIcons) || spinIcons.length > 0)){
      const rotateSpring = spring({
        fps,
        delay: duration / 2,
        frame: frame - startTime - delay,
        from: 0,
        to: 360
      });
      transformStyle = `rotate(${rotateSpring}deg) ${transformStyle}`
    }

    return transformStyle;
}