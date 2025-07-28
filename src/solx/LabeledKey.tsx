import { AbsoluteFill } from "remotion";
import { Icons } from "../SSO/Utils/Icons";
import { OverviewProps } from "./types";
import { Title } from "./Utils/Title";

interface LabeledKeyProps extends OverviewProps {
  readonly styles: React.CSSProperties;
  readonly text: string;
  readonly isPK?: boolean;
}

export const LabeledKey = ({
  frame,
  fps,
  text,
  styles,
  isPK,
  startTime,
  duration,
}: LabeledKeyProps) => {
  const keyIconSize = "220px";

  const defaultStyles = {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Inter, sans-serif",
    width: "300px",
    height: "300px",
    textAlign: "center",
  } as React.CSSProperties;

  const titleStyles = {
    fontSize: 42,
    top: "180px",
    ...defaultStyles,
  } as React.CSSProperties;

  return (
    <AbsoluteFill style={styles}>
      <Icons
        sequenceName="Pub Key"
        images={isPK ? ["key2.svg"] : ["key.svg"]}
        imageStyles={{ height: keyIconSize, width: keyIconSize }}
        startTime={startTime}
        duration={duration}
        containerStyles={{ marginLeft: "60px" }}
        frame={frame}
        fps={fps}
      />
      <Title
        startTime={startTime}
        duration={duration}
        text={text}
        name={`${text} Title`}
        style={titleStyles}
      />
    </AbsoluteFill>
  );
};
