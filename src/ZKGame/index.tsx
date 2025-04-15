import { AbsoluteFill, OffthreadVideo, Sequence, staticFile } from "remotion";
import { Demo } from "./Demo";
import { FPSFactor } from "../constants";

const DEMO_START = 900 * FPSFactor;
// const DEMO_DURATION = 434 * FPSFactor;

const SPLIT = 2100;


export const ZKGame = () => {

  return (
    <AbsoluteFill>
      <OffthreadVideo
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={staticFile("zk-game-demo.mp4")}
        startFrom={0}
        endAt={SPLIT}
      />
      <Sequence from={SPLIT - 1}>
      <OffthreadVideo
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={staticFile("zk-game-demo.mp4")}
        startFrom={SPLIT + 11650}
      />
        </Sequence>

      <Demo startTime={DEMO_START} />

    </AbsoluteFill>
  );
};
