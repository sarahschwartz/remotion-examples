import { AbsoluteFill, spring, useCurrentFrame } from "remotion";

interface CardProps { 
    readonly title: string; 
    readonly styles?: React.CSSProperties;
}
export const Card = ({ title, styles }: CardProps) => {
  const frame = useCurrentFrame();
  const delay = 45;
        const progress = spring({
          frame: frame - delay,
          fps: 30,
          from: 200,
          to: 0,
          durationInFrames: 30,
        });
        const opacity = spring({
          frame: frame - delay,
          fps: 30,
          from: 0,
          to: 1,
          durationInFrames: 20,
        });

  return (
    <AbsoluteFill style={styles}>
          <div
            style={{
              transform: `translateX(${progress}px)`,
              opacity,
              marginBottom: 24,
              width: 550,
              borderRadius: 24,
              padding: '24px 32px',
              background: 'white',
              boxShadow: '0 8px 16px rgba(0,0,0,.08)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <h2 style={{ textAlign: 'center', margin: 0, fontSize: 48, color: '#0D26FF' }}>{title}</h2>
            {/* <p style={{ margin: 0, fontSize: 36, color: '#111827' }}>{subtitle}</p> */}
          </div>
    </AbsoluteFill>
  );
};
