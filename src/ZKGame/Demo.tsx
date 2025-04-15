import { Icons } from "../SSO/Utils/Icons";
import { useCurrentFrame, useVideoConfig, Sequence } from "remotion";
import { Title } from "../SSO/Utils/Title";
import { FPSFactor } from "../constants";

interface DemoProps {
  readonly startTime: number;
}

export const Demo = ({ startTime }: DemoProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const iconSize = "220px";
  const iconDelay = -2 * FPSFactor;
  const duration = 150 * FPSFactor;

  return (
    <>

      <Icons
        sequenceName="Clock Spinner"
        images={["clock-spinner.svg"]}
        imageStyles={{
          height: iconSize,
          width: iconSize,
          marginLeft: "800px",
          marginTop: "1000px",
        }}
        startTime={startTime + iconDelay}
        duration={duration - iconDelay}
        frame={frame}
        fps={fps}
      />

      <Sequence
        name="Demo Sub Title"
        from={startTime}
        durationInFrames={duration - (6 * FPSFactor)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "140px",
          marginTop: "1220px",
          marginLeft: '-60px'
        }}
      >
        <Title
          titleText="Proof can take a few minutes..."
          titleColor="black"
          fontSize={72}
          styles={{
            marginBottom: 10,
            display: "inline-block",
            background: "rgba(255, 255, 255, 0.8)",
            padding: "4px 8px",
          }}
        />
      </Sequence>

      <Sequence
        name="Demo Sub Title"
        from={startTime + duration + 70}
        durationInFrames={duration + 150}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "140px",
          marginTop: "1220px",
          marginLeft: '-60px'
        }}
      >
        <Title
          titleText="Verifies proof onchain"
          titleColor="black"
          fontSize={72}
          styles={{
            marginBottom: 10,
            display: "inline-block",
            background: "rgba(255, 255, 255, 0.8)",
            padding: "4px 8px",
          }}
        />
      </Sequence>

      <Sequence
        name="Demo Sub Title"
        from={startTime + duration*2 + 450}
        durationInFrames={150}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "140px",
          marginTop: "1220px",
          marginLeft: '-60px'
        }}
      >
        <Title
          titleText="Saved!"
          titleColor="black"
          fontSize={72}
          styles={{
            marginBottom: 10,
            display: "inline-block",
            background: "rgba(255, 255, 255, 0.8)",
            padding: "4px 8px",
          }}
        />
      </Sequence>

    </>
  );
};
