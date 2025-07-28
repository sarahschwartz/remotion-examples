import { AbsoluteFill, Img, interpolate, Sequence, staticFile } from "remotion";
import { FPSFactor } from "../constants";

interface GatewayProps {
  readonly frame: number;
  readonly isEnding?: boolean;
}

export function Gateway({ frame, isEnding = false }: GatewayProps) {
  const blockSize = 250;
  const gatewaySize = "350px";
  const ethSize = "250px";
  const checkSize = "150px";

  const BLOCK_START = 4800 * FPSFactor;
  const BLOCK_DURATION = 400 * FPSFactor;

  const ENDING_START = 7600 * FPSFactor;
  const ENDING_DURATION = 130 * FPSFactor;

  const blocks = isEnding ? [0, 1, 2] : [0, 1, 2, 3, 4, 5];

  const blockColorChange = 400;

  const purple = "rgb(165, 121, 235)";
  const ethLeft = 1200;

  return (
    <>
      {blocks.map((block) => {
        const startFrame = isEnding ? ENDING_START + 20 * FPSFactor * block : BLOCK_START + 50 * FPSFactor * block;
        const isLastBlock = block === blocks.length - 1;
        const speed = isEnding ? 50 * FPSFactor : 100 * FPSFactor;
        const lastBlockSpeed = isEnding ? 80 * FPSFactor : 140 * FPSFactor;
        const blockTransform = interpolate(
          frame,
          [startFrame, isLastBlock ? startFrame + lastBlockSpeed : startFrame + speed],
          [-400, isLastBlock ? ethLeft : blockColorChange],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );
        return (
          <Sequence
          name="Gateway"
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
                  width: checkSize,
                  height: checkSize,
                  marginTop: "-200px",
                  marginLeft: "100px",
                }}
              />

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width={checkSize}
                height={checkSize}
                style={{
                  marginTop: "-200px",
                  marginLeft: "100px",
                }}
                viewBox="0 0 24 24"
                fill="none"
                stroke={GREEN}
                // stroke={
                //   block === 5 && blockTransform > blockColorChange
                //     ? BLUE
                //     : GREEN
                // }
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M9 12l2 2l4 -4" />
              </svg> */}
            </AbsoluteFill>
          </Sequence>
        );
      })}

      <Sequence from={isEnding ? ENDING_START : BLOCK_START} durationInFrames={isEnding ? ENDING_DURATION + 40 * FPSFactor : BLOCK_DURATION + 260 * FPSFactor}>
        <AbsoluteFill style={{ top: 700, left: blockColorChange }}>
          <Img
            src={staticFile("hexagon-filled.svg")}
            style={{ width: gatewaySize, height: gatewaySize }}
          />
          <div
            style={{
              fontSize: 60,
              fontFamily: "Poppins",
              marginTop: "-220px",
              marginLeft: "38px",
            }}
          >
            Gateway
          </div>
        </AbsoluteFill>
        <AbsoluteFill style={{ top: 700, left: ethLeft }}>
          <svg
            width={gatewaySize}
            height={gatewaySize}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fill={purple}
              d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
            />
          </svg>
          <Img
            src={staticFile("ethereum.svg")}
            style={{
              width: ethSize,
              height: ethSize,
              marginTop: "-300px",
              marginLeft: "50px",
            }}
          />
        </AbsoluteFill>
      </Sequence>
    </>
  );
}
