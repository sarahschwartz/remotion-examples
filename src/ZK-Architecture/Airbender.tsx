import { AbsoluteFill, Img, interpolate, Sequence, staticFile } from "remotion";
import { FPSFactor, GREEN } from "../constants";

interface AirbenderProps {
  readonly frame: number;
  readonly isEnding?: boolean;
}

export function Airbender({ frame, isEnding = false }: AirbenderProps) {
  const blockSize = 250;
  const airbenderSize = "350px";
  const checkSize = "150px";

  const BLOCK_START = 4060 * FPSFactor;
  const BLOCK_DURATION = 400 * FPSFactor;

  const ENDING_START = 7450 * FPSFactor;
  const ENDING_DURATION = 150 * FPSFactor;

  const blocks = isEnding ? [0, 1, 2] : [0, 1, 2, 3, 4, 5];

  const blockColorChange = 800;

  return (
    <>
      {blocks.map((block) => {
        const startFrame = isEnding ? ENDING_START + 20 * FPSFactor * block : BLOCK_START + 50 * FPSFactor * block;

        const blockTransform = interpolate(
          frame,
          [startFrame, startFrame + 100 * FPSFactor],
          [-400, 2000],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );

        return (
          <Sequence
            from={startFrame}
            durationInFrames={isEnding ? ENDING_DURATION : BLOCK_DURATION}
          >
            <AbsoluteFill style={{ top: 750, left: blockTransform }}>
              <Img
                src={staticFile("block-blue.svg")}
                style={{
                  width: blockSize,
                  height: blockSize,
                }}
              />
              <Img
                src={staticFile("circle-check.svg")}
                style={{
                  display: blockTransform < blockColorChange ? "none" : "block",
                  width: checkSize,
                  height: checkSize,
                  marginTop: "-200px",
                  marginLeft: "100px",
                }}
              />
            </AbsoluteFill>
          </Sequence>
        );
      })}

      <Sequence from={isEnding ? ENDING_START : BLOCK_START} durationInFrames={isEnding ? ENDING_DURATION : BLOCK_DURATION}>
        <AbsoluteFill style={{ top: 700, left: blockColorChange }}>
          <Img
            src={staticFile("rhombus-filled.svg")}
            style={{ width: airbenderSize, height: airbenderSize }}
          />
          <div
            style={{
              fontSize: 60,
              fontFamily: "Poppins",
              marginTop: "-220px",
              marginLeft: "30px",
              color: GREEN,
            }}
          >
            Airbender
          </div>
          <div
            style={{
              fontSize: 100,
              marginTop: "-250px",
              marginLeft: "0px",
            }}
          >
            💪
          </div>
        </AbsoluteFill>
      </Sequence>
    </>
  );
}
