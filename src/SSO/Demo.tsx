import { Icons } from "./Utils/Icons";
import { useCurrentFrame, useVideoConfig, Sequence } from "remotion";
import { Title } from "./Utils/Title";
import { FPSFactor } from "../constants";

interface DemoProps {
  readonly startTime: number;
}

export const Demo = ({ startTime }: DemoProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const iconSize = "220px";
  const iconSize2 = "180px";
  const iconDelay = -2 * FPSFactor;
  const start = 594 * FPSFactor;
  const duration = 854 * FPSFactor;
  const first = 787 * FPSFactor;
  const second = 1003 * FPSFactor;

  return (
    <>
      {/* LEFT */}
      <Sequence
        name="White Panel Left"
        from={start}
        durationInFrames={duration}
      >
        <div
          style={{
            background: "white",
            width: "50%",
            height: frame < second ? "95px" : "125px",
            position: "absolute",
            top: "0px",
          }}
        />
      </Sequence>

      {/* RIGHT */}
      <Sequence
        name="White Panel Right"
        from={start}
        durationInFrames={duration}
      >
        <div
          style={{
            background: "white",
            width: "50%",
            height: frame < first ? "83px" : frame > second ? "101px" : "0",
            position: "absolute",
            top: "0px",
            right: "0px",
          }}
        />

        <div
          style={{
            background: "white",
            width: "25px",
            height: frame > second ? "100%" : "0",
            position: "absolute",
            top: "0px",
            left: "calc(50% - 10px)",
          }}
        />
      </Sequence>

      <Icons
        sequenceName="Happy Icon"
        images={["happy.svg"]}
        imageStyles={{
          height: iconSize,
          width: iconSize,
          marginLeft: "0px",
          marginTop: "832px",
        }}
        startTime={startTime + iconDelay}
        duration={duration - iconDelay}
        frame={frame}
        fps={fps}
      />

      <Icons
        sequenceName="Sick Icon"
        images={["sick.svg"]}
        imageStyles={{
          height: iconSize2,
          width: iconSize2,
          marginLeft: "89.8%",
          marginTop: "850px",
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
          margin: "956px auto 0 auto",
        }}
      >
        <Title
          titleText={frame < second ? "(Sign Up)" : "(Log In & Send)"}
          titleColor="#4615f8"
          fontSize={48}
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
