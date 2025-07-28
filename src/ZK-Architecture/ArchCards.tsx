import { Sequence } from "remotion";
import { Card } from "./Cards";
import { FPSFactor } from "../constants";

export function ArchCards({
  isEnding = false,
}: {
  readonly isEnding?: boolean;
}) {
  const items = [
    { title: "Elastic Network" },
    { title: "ZKsync OS" },
    { title: "ZKsync Airbender" },
    { title: "ZKsync Gateway" },
  ];

  const ENDING_START = 7280 * FPSFactor;
  const ENDING_DURATION = 170 * FPSFactor;

  const CARD_1_START = 560 * FPSFactor;
  const CARD_1_DURATION = 1000 * FPSFactor;

  const CARD_2_START = 620 * FPSFactor;
  const CARD_2_DURATION = CARD_1_DURATION - (CARD_2_START - CARD_1_START);

  const CARD_3_START = 660 * FPSFactor;
  const CARD_3_DURATION = CARD_1_DURATION - (CARD_3_START - CARD_1_START);

  const CARD_4_START = 700 * FPSFactor;
  const CARD_4_DURATION = CARD_1_DURATION - (CARD_4_START - CARD_1_START);

  const OS_CARD_START = 3350 * FPSFactor;
  const OS_CARD_DURATION = 500 * FPSFactor;
  const card2Delay = 70 * FPSFactor;
  const OS_CARD_2 = OS_CARD_START + card2Delay;
  const card3Delay = 100 * FPSFactor;
  const OS_CARD_3 = OS_CARD_START + card3Delay;
  const card4Delay = 145 * FPSFactor;
  const OS_CARD_4 = OS_CARD_START + card4Delay;

  return (
    <>
      {!isEnding && (
        <>
          <Sequence from={CARD_1_START} durationInFrames={CARD_1_DURATION}>
            <Card title={items[0].title} styles={{ top: 200, left: 60 }} />
          </Sequence>
          <Sequence from={CARD_2_START} durationInFrames={CARD_2_DURATION}>
            <Card title={items[1].title} styles={{ top: 600, left: 60 }} />
          </Sequence>
          <Sequence from={CARD_3_START} durationInFrames={CARD_3_DURATION}>
            <Card title={items[2].title} styles={{ top: 200, left: 1300 }} />
          </Sequence>
          <Sequence from={CARD_4_START} durationInFrames={CARD_4_DURATION}>
            <Card title={items[3].title} styles={{ top: 600, left: 1300 }} />
          </Sequence>
        </>
      )}

      <Sequence
        from={isEnding ? ENDING_START : OS_CARD_START}
        durationInFrames={isEnding ? ENDING_DURATION : OS_CARD_DURATION}
      >
        <Card title="EVM" styles={{ top: 200, left: 60 }} />
      </Sequence>
      <Sequence
        from={isEnding ? ENDING_START : OS_CARD_2}
        durationInFrames={
          isEnding ? ENDING_DURATION : OS_CARD_DURATION - card2Delay
        }
      >
        <Card title="EraVM" styles={{ top: 350, left: 60 }} />
      </Sequence>
      <Sequence
        from={isEnding ? ENDING_START : OS_CARD_3}
        durationInFrames={
          isEnding ? ENDING_DURATION : OS_CARD_DURATION - card3Delay
        }
      >
        <Card title="WASM" styles={{ top: 500, left: 60 }} />
      </Sequence>
      <Sequence
        from={isEnding ? ENDING_START : OS_CARD_4}
        durationInFrames={
          isEnding ? ENDING_DURATION : OS_CARD_DURATION - card4Delay
        }
      >
        <Card title="RISC-V" styles={{ top: 650, left: 60 }} />
      </Sequence>

      {/* <Sequence from={OS_CARD_4 + cardFactor} durationInFrames={OS_CARD_DURATION - cardFactor * 4}>
              <AbsoluteFill style={{ left: 1180, top: 450 }}>
                <GradientLine
                    height={12}
                    width='100px'
                    duration={2}
                    style={{ transform: 'rotate(30deg)' }}
                  />
              </AbsoluteFill>
              <AbsoluteFill style={{ left: 1180, top: 500 }}>
                <GradientLine
                    height={12}
                    width='100px'
                    duration={2}
                    style={{ transform: 'rotate(-30deg)' }}
                  />
              </AbsoluteFill>
              <AbsoluteFill style={{ left: 680, top: 475 }}>
                <GradientLine
                    height={12}
                    width='600px'
                    duration={2}
                  />
              </AbsoluteFill>
              <Card title="ZKsync OS" styles={{ top: 425, left: 1360 }} />
            </Sequence> */}
    </>
  );
}
