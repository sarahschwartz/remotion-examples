import { Icons } from "../SSO/Utils/Icons";
import { OverviewProps } from "./types";
import { AbsoluteFill } from "remotion";
import { Title } from "./Utils/Title";
import { SmartContracts } from "./SmartContracts";

export const Sessions = ({
  frame,
  fps,
  startTime,
  duration,
}: OverviewProps) => {
  const iconSize = "400px";
  const gasSize = "320px";

  const text = "arg1, arg2";

  const defaultStyles = {
    color: "#d0cfce",
    fontWeight: "bold",
    fontFamily: "Inter, sans-serif",
    width: "500px",
    height: "300px",
    textAlign: "center",
  } as React.CSSProperties;

  const titleStyles = {
    fontSize: 32,
    top: "80px",
    left: "-50px",
    ...defaultStyles,
  } as React.CSSProperties;

  const pageSize = "400px";
  const codeSize = "180px";

  const codeStyles = {
    height: codeSize,
    width: codeSize,
    marginLeft: "1180px",
    marginTop: "190px",
  } as React.CSSProperties;

  const pageStyles = {
    height: pageSize,
    width: pageSize,
    marginLeft: "1035px",
    marginTop: "80px",
  } as React.CSSProperties;

  return (
    <>
      <Icons
        sequenceName="User"
        images={["user-circle.svg"]}
        imageStyles={{
          height: iconSize,
          width: iconSize,
          marginLeft: "800px",
          marginTop: "520px",
        }}
        startTime={startTime}
        duration={duration}
        frame={frame}
        fps={fps}
      />

      <Icons
        sequenceName="Time"
        images={["time-duration-30-gray.svg"]}
        imageStyles={{
          height: iconSize,
          width: iconSize,
          marginLeft: "200px",
          marginTop: "520px",
        }}
        startTime={startTime + 100}
        duration={duration - 100}
        frame={frame}
        fps={fps}
      />

      <Icons
        sequenceName="Coin"
        images={["coin.svg"]}
        imageStyles={{
          height: iconSize,
          width: iconSize,
          marginLeft: "200px",
          marginTop: "80px",
        }}
        startTime={startTime + 200}
        duration={duration - 200}
        frame={frame}
        fps={fps}
      />

      <Icons
        sequenceName="Gas"
        images={["gas.svg"]}
        imageStyles={{
          height: gasSize,
          width: gasSize,
          marginLeft: "680px",
          marginTop: "120px",
        }}
        startTime={startTime + 200}
        duration={duration - 200}
        frame={frame}
        fps={fps}
      />

      <SmartContracts
        frame={frame}
        fps={fps}
        startTime={startTime + 300}
        duration={duration - 300}
        pageStyles={pageStyles}
        codeStyles={codeStyles}
      />

      <Icons
        sequenceName="Function"
        images={["function.svg"]}
        imageStyles={{
          height: iconSize,
          width: iconSize,
          marginLeft: "1420px",
          marginTop: "80px",
        }}
        startTime={startTime + 420}
        duration={duration - 420}
        frame={frame}
        fps={fps}
      />

      <AbsoluteFill style={{ marginLeft: "1410px", marginTop: "520px" }}>
        <>
          <Icons
            sequenceName="Bubble"
            images={["bubble.svg"]}
            imageStyles={{
              height: iconSize,
              width: iconSize,
            }}
            startTime={startTime + 530}
            duration={duration - 530}
            frame={frame}
            fps={fps}
          />

          <Title
            startTime={startTime + 530}
            duration={duration - 548}
            text={text}
            name={`${text} Title`}
            style={titleStyles}
          />
        </>
      </AbsoluteFill>
    </>
  );
};
