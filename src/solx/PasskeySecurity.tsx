import { AbsoluteFill } from "remotion";
import { getTransformStyles } from "../GlobalUtils/translate";
import { Icons } from "../SSO/Utils/Icons";
import { LabeledKey } from "./LabeledKey";
import { OverviewProps } from "./types";
import { AuthServer } from "./AuthServer";
import { SmartContracts } from "./SmartContracts";

export const PassKeySecurity = ({
    frame,
    fps,
    startTime,
    duration,
  }: OverviewProps) => {
    const text = ["Private Key", "Public Key"];
    const deviceSize = "300px";
    const x = -150;
    const y = -210;
    const translateStartTime = 140;
    const delay = translateStartTime + 20;
  
    const pageSize = "380px";
    const codeSize = "180px";
  
    const codeStyles = {
      height: codeSize,
      width: codeSize,
      marginLeft: "1580px",
      marginTop: "630px",
    } as React.CSSProperties;
  
    const pageStyles = {
      height: pageSize,
      width: pageSize,
      marginLeft: "1450px",
      marginTop: "540px",
    } as React.CSSProperties;
  
    return (
      <>
        <AbsoluteFill style={{ marginLeft: "1050px", marginTop: "520px" }}>
          <AuthServer
            frame={frame}
            fps={fps}
            serverSize="450px"
            startTime={startTime + delay}
            duration={duration - delay}
          />
        </AbsoluteFill>
  
        <Icons
          sequenceName="Mobile Device"
          images={["device-mobile.svg"]}
          imageStyles={{ height: deviceSize, width: deviceSize }}
          startTime={startTime + delay}
          duration={duration - delay}
          containerStyles={{ marginTop: "600px", marginLeft: "440px" }}
          frame={frame}
          fps={fps}
        />
  
        <Icons
          sequenceName="Desktop Device"
          images={["device-desktop.svg"]}
          imageStyles={{ height: deviceSize, width: deviceSize }}
          startTime={startTime + delay}
          duration={duration - delay}
          containerStyles={{ marginTop: "600px", marginLeft: "120px" }}
          frame={frame}
          fps={fps}
        />
  
        <SmartContracts
          frame={frame}
          fps={fps}
          startTime={startTime + delay}
          duration={duration - delay}
          pageStyles={pageStyles}
          codeStyles={codeStyles}
        />
  
        <AbsoluteFill style={{ marginLeft: "600px" }}>
          <>
            {text.map((item, index) => {
              const isPK = item === "Private Key";
              const translate = isPK
                ? { x, y, startTime: translateStartTime }
                : { x: -x, y, startTime: translateStartTime };
              const transformStyles = getTransformStyles({
                translate,
                frame,
                fps,
                startTime,
                delay: 0,
                duration,
              });
  
              return (
                <LabeledKey
                  key={index}
                  frame={frame}
                  fps={fps}
                  text={item}
                  styles={{
                    marginLeft: `${index * 400}px`,
                    marginTop: "500px",
                    transform: transformStyles,
                  }}
                  isPK={isPK}
                  startTime={startTime}
                  duration={duration}
                />
              );
            })}
          </>
        </AbsoluteFill>
      </>
    );
  };
  