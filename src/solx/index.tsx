import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FPSFactor } from "../constants";
import { VideoWithBorder } from "./Utils/VideoWithBorder";
import { Title } from "./Utils/Title";
import { Icons } from "../SSO/Utils/Icons";

export const Solx = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const TITLE_START = 0 * FPSFactor;
  const TITLE_DURATION = 200 * FPSFactor;
  const INTRO_DURATION = 1000 * FPSFactor;

  const WEBSITE_START = TITLE_START + TITLE_DURATION;
  const WEBSITE_DURATION = INTRO_DURATION - TITLE_DURATION;

  const VIDEO_START = INTRO_DURATION + 20 * FPSFactor;
  const VIDEO_DURATION = 3160 * FPSFactor;

  const PART_THREE_START = VIDEO_START + VIDEO_DURATION;
  const PART_THREE_DURATION = 300 * FPSFactor;

  const imgSize = "350px";

  const defaultStyles = {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    height: "400px",
  } as React.CSSProperties;

  const titleStyles = {
    ...defaultStyles,
    top: "340px",
    left: "300px",
    fontSize: 62,
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco",
  } as React.CSSProperties;

  const linkStyles = {
    ...defaultStyles,
    fontFamily: "Inter, sans-serif",
  } as React.CSSProperties;

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          backgroundColor: "black",
          width: "3000px",
          height: "3000px",
        }}
      />

      <Sequence from={100} name="Intro Audio" durationInFrames={INTRO_DURATION}>
        <Audio src={staticFile("solx-intro-final.mp3")} />
      </Sequence>

      <AbsoluteFill style={{ transform: "scale(0.7)", marginTop: "20px" }}>
        <Icons
          startTime={TITLE_START}
          duration={TITLE_DURATION}
          frame={frame}
          fps={fps}
          sequenceName="Solx Logo"
          images={["solx-logo.png"]}
        />
      </AbsoluteFill>

      <Title
        startTime={TITLE_START}
        duration={TITLE_DURATION}
        text="{ solx }"
        name="Solx Title"
        style={titleStyles}
      />

      <Sequence
        from={WEBSITE_START}
        name="Website"
        durationInFrames={WEBSITE_DURATION}
      >
        <VideoWithBorder filename="solx-website.mp4" startTime={560} />
      </Sequence>

      <Sequence
        from={VIDEO_START}
        name="Main Video"
        durationInFrames={VIDEO_DURATION}
      >
        <VideoWithBorder filename="solx-video-final.mp4" startTime={0} />
        <AbsoluteFill
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            padding: "40px",
          }}
        >
          <Img
            src={staticFile("covershot.png")}
            style={{ width: imgSize, height: imgSize }}
          />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={PART_THREE_START + 20 * FPSFactor}
        name="Audio"
        durationInFrames={PART_THREE_DURATION - 20 * FPSFactor}
      >
        <Audio
          src={staticFile("solx-outro-final.mp3")}
          startFrom={255}
        />
      </Sequence>

      <AbsoluteFill style={{ transform: "scale(0.3)", top: -170, left: -240 }}>
        <Icons
          startTime={PART_THREE_START}
          duration={PART_THREE_DURATION}
          frame={frame}
          fps={fps}
          sequenceName="Solx Logo"
          images={["solx-logo.png"]}
        />
      </AbsoluteFill>

      <Title
        startTime={PART_THREE_START}
        duration={PART_THREE_DURATION}
        text="solx.zksync.io"
        name="Solx Docs Title"
        style={{
          ...linkStyles,
          top: "180px",
          fontSize: 62,
          left: 150,
        }}
      />

      <Title
        startTime={PART_THREE_START}
        duration={PART_THREE_DURATION}
        text="github.com/sarahschwartz/solx-demo"
        name="Foundry Title"
        style={{
          ...linkStyles,
          top: "520px",
          fontSize: 42,
        }}
      />

      <Title
        startTime={PART_THREE_START}
        duration={PART_THREE_DURATION}
        text="github.com/uF4No/solx-hardhat-template"
        name="Hardhat Title"
        style={{
          ...linkStyles,
          top: "720px",
          fontSize: 42,
        }}
      />
    </AbsoluteFill>
  );
};
