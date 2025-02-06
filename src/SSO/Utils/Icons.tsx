import { Img, staticFile, spring, Sequence } from "remotion";

interface IconsProps {
  readonly sequenceName: string;
  readonly images: string[];
  readonly startTime: number;
  readonly duration: number;
  readonly containerStyles?: React.CSSProperties;
  readonly imageStyles?: React.CSSProperties;
  readonly translate?: { x: number; y: number };
  readonly frame: number;
  readonly fps: number;
  readonly spinIcons?: boolean | boolean[];
}

export const Icons = ({
  sequenceName,
  images,
  startTime,
  duration,
  containerStyles,
  imageStyles,
  translate,
  frame,
  fps,
  spinIcons
}: IconsProps) => {
  return (
    <Sequence
      name={sequenceName}
      from={startTime}
      durationInFrames={duration}
      style={{ flexDirection: "column" }}
    >
      <div style={{ display: "flex", ...containerStyles }}>
        {images.map((image, i) => {
          const delay = i * 5;

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
            translateValue = spring({
              frame: frame - startTime - delay - 20,
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

          if(spinIcons && (!Array.isArray(spinIcons) || spinIcons[i])){
            const rotateSpring = spring({
              fps,
              delay: duration / 2,
              frame: frame - startTime - delay,
              from: 0,
              to: 360
            });
            transformStyle = `rotate(${rotateSpring}deg) ${transformStyle}`
          }

          return (
            <Img
              key={image}
              src={staticFile(image)}
              style={{
                transform: transformStyle,
                ...imageStyles,
              }}
            />
          );
        })}
      </div>
    </Sequence>
  );
};
