import { Icons } from "../SSO/Utils/Icons";
import { OverviewProps } from "./types";
import { SmartContracts } from "./SmartContracts";

export const Verified = ({
  frame,
  fps,
  startTime,
  duration,
}: OverviewProps) => {
  const pageSize = "880px";
  const codeSize = "340px";
  const iconSize = "400px";
  const delay = 50;

  const codeStyles = {
    height: codeSize,
    width: codeSize,
    marginLeft: "780px",
    marginTop: "330px",
  } as React.CSSProperties;

  const pageStyles = {
    height: pageSize,
    width: pageSize,
    marginLeft: "450px",
    marginTop: "80px",
  } as React.CSSProperties;

  return (
    <>
      <SmartContracts
        frame={frame}
        fps={fps}
        startTime={startTime}
        duration={duration}
        pageStyles={pageStyles}
        codeStyles={codeStyles}
      />

      <Icons
        sequenceName="Verified"
        images={["circle-check.svg"]}
        imageStyles={{ height: iconSize, width: iconSize }}
        startTime={startTime + delay}
        duration={duration - delay}
        containerStyles={{ marginTop: "40px", marginLeft: "1100px" }}
        frame={frame}
        fps={fps}
      />
    </>
  );
};
