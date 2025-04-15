import { Block, HighlightedCodeBlock, parseRoot } from "codehike/blocks";
import { z } from "zod";
import { AbsoluteFill, Sequence, Img, staticFile } from "remotion";
import { ProgressBar } from "./progress-bar";
import { Code } from "./code";

import Content from "./content.md";
import { Step } from "../../SSO/Utils/types";
import { FPSFactor } from "../../constants";

export default function SSOCode({ startTime }: { readonly startTime: number }) {
  const { steps } = parseRoot(
    Content,
    Block.extend({
      steps: z.array(
        Block.extend({
          code: HighlightedCodeBlock,
          duration: z.string().transform((v) => parseInt(v, 10)),
        }),
      ),
    }),
  );

  return <Video steps={steps} startTime={startTime} />;
}

interface VideoProps {
  readonly steps: Step[];
  readonly startTime: number;
}

function Video({ steps, startTime }: VideoProps) {
  let stepEnd = 0;
  const finalEnd = steps.reduce(
    (acc, step) => acc + step.duration * FPSFactor,
    0,
  );
  const imgSize = "400px";
  return (
    <>
      <Sequence name="Code Hike" from={startTime} durationInFrames={finalEnd}>
        <AbsoluteFill style={{ backgroundColor: "#0D1117" }}>
          <ProgressBar steps={steps} />
        </AbsoluteFill>
        {/* <AbsoluteFill
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            padding: "140px 70px",
          }}
        >
          <Img
            src={staticFile("covershot.png")}
            style={{ width: imgSize, height: imgSize }}
          />
        </AbsoluteFill> */}
      </Sequence>
      {steps.map((step, index) => {
        const thisDuration = step.duration * FPSFactor;
        stepEnd += thisDuration;
        const from = startTime + stepEnd - thisDuration;
        return (
          <AbsoluteFill>
            <Sequence
              key={index}
              name={`${step.title}-${index}`}
              from={from}
              durationInFrames={thisDuration}
              style={{
                margin: "auto",
                width: "1600px",
                display: "flex",
                padding: "20px 60px",
              }}
            >
              <Code
                oldCode={steps[index - 1]?.code}
                newCode={step.code}
                durationInFrames={60 * FPSFactor}
              />
            </Sequence>
          </AbsoluteFill>
        );
      })}
    </>
  );
}
