import { spring, Sequence } from "remotion";
import { FPSFactor } from "../../constants";

interface FingerprintProps {
  readonly startTime: number;
  readonly duration: number;
  readonly frame: number;
  readonly fps: number;
}

export const Fingerprint = ({ startTime, duration, frame, fps }: FingerprintProps) => {
  const fingerprintSize = "320px";
  const delay = 5 * FPSFactor;
  const scanDelay = 30 * FPSFactor;

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
    delay: duration - (20 * FPSFactor),
    frame: frame - startTime - delay,
  });

  const baseScale = enter - exit;

  const offset = spring({
    frame: frame - startTime - scanDelay,
    fps,
    config: {
      damping: 200,
    },
    from: -20,
    to: 20,
  });

  return (
    <Sequence
      name="Fingerprint"
      from={startTime}
      durationInFrames={duration}
      style={{
        flexDirection: "column",
        marginLeft: "235px",
        marginTop: "270px",
      }}
    >
      <div style={{ width: fingerprintSize, height: fingerprintSize, transform: `scale(${baseScale})` }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#stroke-gradient)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-fingerprint-scan"
        >
          <defs>
            <linearGradient
              id="stroke-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              gradientUnits="userSpaceOnUse"
              gradientTransform={`translate(${offset})`}
            >
              <stop offset="0%" stopColor="#4facfe" />
              <stop offset="50%" stopColor="#00f2fe" />
              <stop offset="100%" stopColor="#4facfe" />
            </linearGradient>
          </defs>

          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11a3 3 0 0 1 6 0c0 1.657 .612 3.082 1 4" />
          <path d="M12 11v1.75c-.001 1.11 .661 2.206 1 3.25" />
          <path d="M9 14.25c.068 .58 .358 1.186 .5 1.75" />
          <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
          <path d="M4 16v2a2 2 0 0 0 2 2h2" />
          <path d="M16 4h2a2 2 0 0 1 2 2v2" />
          <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
        </svg>
      </div>
    </Sequence>
  );
};
