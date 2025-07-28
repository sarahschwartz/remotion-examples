import { AbsoluteFill, staticFile, OffthreadVideo } from "remotion";
// import { FPSFactor } from "../../constants";

interface VideoWithBorderProps {
  readonly startTime: number;
  // readonly videoOffsetPoints: { start: number; end: number }[];
  readonly filename: string;
}

export const VideoWithBorder = ({
  startTime,
  filename,
}: VideoWithBorderProps) => {
  // const { videoOffset, width } = calculateVideoOffset(frame, videoOffsetPoints);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          width: '100%',
          height: "100%",
          // border: "4px solid white",
          overflow: "hidden",
          borderRadius: "8px",
          position: "relative",
          // marginLeft: videoOffset,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%)`,
            width: "100%",
            height: "100%",
          }}
        >
          <OffthreadVideo
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            volume={0.6}
            startFrom={startTime}
            src={staticFile(filename ?? "SSO_Draft_2.mp4")}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// function calculateVideoOffset(
//   currentFrame: number,
//   videoOffsetPoints: { start: number; end: number }[],
// ): { videoOffset: number; width: string } {
//   const final = { videoOffset: 0, width: "100%" };
//   for (const { start, end } of videoOffsetPoints) {
//     if (currentFrame >= start && currentFrame <= end) {
//       final.videoOffset = interpolate(
//         currentFrame,
//         [start, start + (10 * FPSFactor)],
//         [0, 700],
//         {
//           extrapolateLeft: "clamp",
//           extrapolateRight: "clamp",
//         },
//       );
//       const width = interpolate(currentFrame, [start, start + (10 * FPSFactor)], [100, 55], {
//         extrapolateLeft: "clamp",
//         extrapolateRight: "clamp",
//       });
//       final.width = `${width}%`;
//       return final;
//     }
//   }
//   return final;
// }
